import { useParams } from "react-router-dom";
import "./Employee.css";
import employees from "../data/employees.json";
import departments from "../data/departments.json";
import konqi from "./Konqi.png";

export const Employee = () => {
  const { id } = useParams();

  const foundEmployee = employees.find(
    (employee) => employee.id === Number(id)
  );

  const foundDepartment = departments.find(
    (department) => department.id === foundEmployee.departmentId
  );

  return (
    <section className="Employee">
      <h1>Karta zaměstnance</h1>
      <div className="Employee-card">
        <div className="Employee-avatar-container">
          <img src={konqi} className="Employee-avatar" alt="" />
        </div>
        <table className="Employee-detail-container">
          <tr>
            <th>Name</th>
            <td>
              {foundEmployee.firstName} {foundEmployee.lastName}
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{foundEmployee.age}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{foundDepartment.name}</td>
          </tr>
        </table>
      </div>
      <Link to="/">Zpět na seznam zaměstnanců</Link>;
    </section>
  );
};
