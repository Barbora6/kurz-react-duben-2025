import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Forms } from "./components/Forms/Forms";
import App from "./App";

import { Employees } from "./components/Employees/Employees";
import { PublicHoliday } from "./components/PublicHolidays/PublicHoliday";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/forms", element: <Forms /> },
  { path: "/public-holiday", element: <PublicHoliday /> },
  { path: "/employee", element: <Employees /> }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
