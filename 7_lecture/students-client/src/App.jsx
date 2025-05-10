import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { StudentList } from "./components/StudentList";
import { StudentDetail } from "./components/StudentDetail";
import { StudentEditForm } from "./components/StudentEditForm";
import { StudentCreateForm } from "./components/StudentCreateForm";

const router = createBrowserRouter([
  { path: "/", element: <StudentList /> },
  { path: "/students/:id", element: <StudentDetail /> },
  { path: "/students/:id/edit", element: <StudentEditForm /> },
  { path: "/students/:id/create", element: <StudentCreateForm /> }
]);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
