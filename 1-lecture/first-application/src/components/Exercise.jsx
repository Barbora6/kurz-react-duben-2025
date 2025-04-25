import { zamestnanci } from "../data";

export const Exercise = ({ name, lastName, age }) => {
  return (
    <>
      <tr>
        <th>Jméno:{name}</th>
        <th>Příjmení:{lastName}</th>
        <th>Věk:{age}</th>
      </tr>
      <table>
        {zamestnanci.map((item) => {
          return (
            <tr>
              <td>{item.jmeno}</td>
              <td>{item.prijmeni}</td>
              <td>{item.vek}</td>
              <td>{item.organizacniJednotkaId}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
