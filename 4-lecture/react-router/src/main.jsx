import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Introduction } from "./components/Introduction";
import { Academies } from "./components/Academies";
import { ReactAcademy } from "./components/ReactAcademy";

const router = createBrowserRouter([
  { path: "/", element: <Introduction /> },
  { path: "/akademie", element: <Academies /> },
  { path: "/react-akademie", element: <ReactAcademy /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
