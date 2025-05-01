import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Seasons } from "./components/Seasons";
import { Spring } from "./components/Spring";
import { Summer } from "./components/Summer";
import { Autumn } from "./components/Autumn";
import { Winter } from "./components/Winter";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/season", element: <Seasons /> },
  { path: "/spring", element: <Spring /> },
  { path: "/summer", element: <Summer /> },
  { path: "/autumn", element: <Autumn /> },
  { path: "/winter", element: <Winter /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
