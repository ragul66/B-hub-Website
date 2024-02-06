import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NoPage from "./pages/NoPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
  {
    path: "/About",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
