import { Link } from "react-router-dom";
import "./App.css";
import employees from "./data/employees.json";

function App() {
  return (
    <ul>
      {employees.map((employee) => (
        <Link to={`/employees/${employee.id}`}>
          {employee.firstName} {employee.lastName}
        </Link>
      ))}
    </ul>
  );
}

export default App;
