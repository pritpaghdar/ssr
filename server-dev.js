import fs from "fs";
import express from "express";
import { createServer } from "vite";

const app = express();

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: "custom",
});

app.use(vite.middlewares);

app.use("*", async (req, res) => {
  const url = req.originalUrl; // Get the requested URL

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
    const { html, helmet } = render(url); // Call the render function

    console.log('Rendered HTML:', html); // Log rendered HTML
    console.log('Helmet:', helmet); // Log helmet data

    const template = await vite.transformIndexHtml(
      url,
      fs.readFileSync("index.html", "utf-8")
    );
    const responseHtml = template.replace(`<!--outlet-->`, html); // Inject rendered HTML into the template

    res
      .status(200)
      .set({ "Content-Type": "text/html" })
      .end(
        responseHtml.replace(`<!--helmet-->`, helmet.title + helmet.meta) // Inject helmet data
        
      );
  } catch (error) {
    console.error('Rendering error:', error); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send a generic error message
  }
});


app.listen(4173, () => {
  console.log("http://localhost:4173.");
});
