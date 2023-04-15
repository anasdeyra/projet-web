import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appshell from "./components/Appshell/Appshell";
import Services from "./pages/services";
import { Blog } from "./pages/Blog";

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
    path : "/blog",
    element : <Blog/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appshell>
      <RouterProvider router={router} />
    </Appshell>
  </React.StrictMode>
);
