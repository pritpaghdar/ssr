import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <Router> {/* Wrap with Router */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>

        <h1>App</h1>
        <p>Lorem Ipsum</p>
        <div>
          <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
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
        <ol>
          <li>
            <strong>
              <em>Improved Performance:</em>{" "}
            </strong>
            SSR can significantly reduce the time it takes for a web page to be
            displayed to the user, especially for the initial page load.
          </li>
          {/* Other list items */}
        </ol>
      </Router> {/* Close Router */}
    </HelmetProvider>
  );
};

export default App;
