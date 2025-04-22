import { zamestnanci } from "./data";

export const EmployeeTable = () => {
  return (
    <table>
      <tr>
        <th>Jméno:</th>
        <th>Příjmení:</th>
        <th>Věk:</th>
        <th>Organizační jednotka</th>
      </tr>
      {zamestnanci.map((zamestnanec) => {
        return (
          <>
            <tr key={zamestnanec.id}>
              <td>{zamestnanec.jmeno}</td>
              <td>{zamestnanec.prijmeni}</td>
              <td>{zamestnanec.vek}</td>
              <td>{zamestnanec.organizacniJednotkaId}</td>
            </tr>
          </>
        );
      })}
    </table>
  );
};
