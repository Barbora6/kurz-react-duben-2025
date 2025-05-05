import { useState } from "react";

export const Forms = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstnameChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <main>
      <h1>Tady bude formulář</h1>
      <table>
        <tr>
          <th>Křestní jméno</th>
          <td>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstnameChange}
            />
          </td>
        </tr>
      </table>
    </main>
  );
};

// pro každé políčku musíme zavést useState, potom v inputu zadám jako hodnotu proměnnou z useState
// přidám událost onChange a vrátím v ní setFirstName
