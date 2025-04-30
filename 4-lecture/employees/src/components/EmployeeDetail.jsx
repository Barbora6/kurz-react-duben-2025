import { useParams } from "react-router-dom";
import employees from "../data/employees.json";
import departments from "../data/departments.json";

export const EmployeeDetail = () => {
  const { id } = useParams();

  const foundEmployee = employees.find(
    (employee) => employee.id === Number(id)
  );

  const foundDepartment = departments.find(
    (department) => department.id === foundEmployee.departmentId
  );

  return (
    <table>
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
  );
};
