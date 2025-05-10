import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { StudentList } from "../../../7_lecture/students-client/src/components/StudentList";

const router = createBrowserRouter([{ path: "/", element: <StudentList /> }]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
