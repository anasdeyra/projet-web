import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appshell from "./components/Appshell/Appshell";
import Services from "./pages/services";
import { Blog } from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import App from "./pages/App";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path :"/app/search",
    element: <Search/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appshell>
      <RouterProvider router={router} />
    </Appshell>
  </React.StrictMode>
);
