import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Forms } from "./components/Forms";
import App from "./App";
import { PublicHoliday } from "./components/PublicHolidays/PublicHoliday";
import { Employees } from "./components/Employees/Employees";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/forms", element: <Forms /> },
  { path: "/public-holiday", element: <PublicHoliday /> },
  { path: "/employee", element: <Employees /> }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
