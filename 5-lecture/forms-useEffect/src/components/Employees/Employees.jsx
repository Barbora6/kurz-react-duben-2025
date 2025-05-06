import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import "./Employees.css";

export const Employees = () => {
  const [employees, setEmployees] = useState();
  const [departments, setDepartments] = useState();

  useEffect(() => {
    const getDataEmployees = async () => {
      const EmployeesResponse = await fetch(
        "http://localhost:5173/data/employees.json"
      );
      setEmployees(await EmployeesResponse.json());

      const DepartmentsResponse = await fetch(
        "http://localhost:5173/data/departments.json"
      );
      setDepartments(await DepartmentsResponse.json());
    };

    getDataEmployees();
  }, []);

  const findDepartment = (employee) =>
    departments.find((department) => department.id === employee.departmentId);

  return (
    <main className="Employees">
      <header>
        <h1>Seznam zaměstnanců:</h1>
      </header>
      <section>
        {employees === undefined || departments === undefined ? (
          <div>
            <Loader />
          </div>
        ) : (
          <table className="Employees-table">
            <thead>
              <tr>
                <th>Jméno</th>
                <th>Věk</th>
                <th>Oddělení</th>
              </tr>
            </thead>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  {employee.firstName} {employee.lastName}
                </td>
                <td>({employee.age})</td>
                <td>{findDepartment(employee)?.name}</td>
              </tr>
            ))}
          </table>
        )}
      </section>
    </main>
  );
};

// Operátor ?. se nazývá "optional chaining" a slouží k bezpečnému přístupu k vlastnostem objektů, které můžou být undefined nebo null.
// Použití ?.name je bezpečné – kdyby se findDepartment vrátil undefined, nebude to házet chybu.
