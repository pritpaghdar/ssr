import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { HelmetProvider as HelmetProvider$1 } from "react-helmet-async";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import About from "./pages/about"; // Make sure to import your About component
import Contact from "./pages/contact"; // Make sure to import your Contact component

const App = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(HelmetProvider$1, {
        children: /* @__PURE__ */ jsx(Routes, {
          children: [
            /* @__PURE__ */ jsx(Route, {
              path: "/about",
              element: /* @__PURE__ */ jsx(About, {}),
            }),
            /* @__PURE__ */ jsx(Route, {
              path: "/contact",
              element: /* @__PURE__ */ jsx(Contact, {}),
            }),
            // Add a default route or a 404 page if needed
          ],
        }),
      }),

      <main>
        {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
        <h1>App</h1>
        <p>Lorem Ipsum</p>
        <div className="relative">
          <div className="absolute right-0 top-0 z-50">
            <button variant="link" className="p-0">
              this is my name
            </button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-3 z-50 w-fit text-center">
            <span>Active</span>
          </div>
        </div>
      </main>
    ],
  });
};

export default App;
