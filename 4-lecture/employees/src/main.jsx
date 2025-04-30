import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeeDetail } from "./components/EmployeeDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/employees", element: <EmployeeDetail /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
