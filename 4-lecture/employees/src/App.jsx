import { Link } from "react-router-dom";
import "./App.css";
import employees from "./data/employees.json";

function App() {
  return (
    <div className="App">
      <h1>Seznam zaměstnanců</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              {employee.firstName} {employee.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
