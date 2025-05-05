import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Forms } from "./components/Forms";
import App from "./App";
import { PublicHoliday } from "./components/PublicHoliday";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/forms", element: <Forms /> },
  { path: "/public-holiday", element: <PublicHoliday /> }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
