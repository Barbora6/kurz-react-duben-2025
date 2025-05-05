import { useState } from "react";
import "./Forms.css";

export const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(Number(event.target.value));
  };

  console.log("firstName:", firstName);

  return (
    <main>
      <h1>Tady bude formulář</h1>
      <table>
        <tbody>
          <tr>
            <th>
              <label htmlFor="first-name">Křestní jméno</label>
            </th>
            <td>
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="last-name">Příjmení</label>
            </th>
            <td>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="age">Věk</label>
            </th>
            <td>
              <input
                type="number"
                id="age"
                value={age}
                onChange={handleAgeChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* Vypisování dat do stránky */}

      <h1>Zadané informace</h1>
      <table>
        <tbody>
          <tr>
            <th>Celé jméno:</th>
            <td>
              {firstName} {lastName}
            </td>
          </tr>
          <tr>
            <th>Věk</th>
            <td>Uživatel {age >= 18 ? "je" : "není"} plnoletý.</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

// pro každé políčku musíme zavést useState, potom v inputu zadám jako hodnotu proměnnou z useState
// přidám událost onChange a vrátím v ní setFirstName
