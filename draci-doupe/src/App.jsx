import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import { Introduction } from "./components/Introduction";
import { Races } from "./components/Races";
import { Professions } from "./components/Professions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Introduction /> },
      { path: "/races", element: <Races /> },
      { path: "/professions", element: <Professions /> }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
