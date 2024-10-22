import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Step02, { loader as iconLoader } from "./components/Step02.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "steps/:icon",
        element: <Step02 />,
        loader: iconLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
