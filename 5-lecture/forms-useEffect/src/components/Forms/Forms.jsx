import { useState } from "react";
import "./Forms.css";

const DAYS = [
  { code: "Mon", name: "Pondělí" },
  { code: "Tue", name: "Úterý" },
  { code: "Wen", name: "Středa" },
  { code: "Thu", name: "Čtvrtek" },
  { code: "Fri", name: "Pátek" },
  { code: "Sat", name: "Sobota" },
  { code: "Sun", name: "Neděle" }
];

const MAGI = [
  { code: "CASPAR", name: "Kašpar" },
  { code: "MELCHIOR", name: "Melichar" },
  { code: "BALTHAZAR", name: "Baltazar" }
];

export const Forms = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [dayCode, setDayCode] = useState("Mon");
  const [magusCode, setMagusCode] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(Number(event.target.value));
  };
  const handleDayChange = (event) => {
    setDayCode(event.target.value);
  };

  const handleMagusChange = (event) => {
    setMagusCode(event.target.value);
  };

  console.log("firstName:", firstName);

  return (
    <main className="Forms">
      <h1>Zadávání dat</h1>
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
          <tr>
            <th>
              <label htmlFor="day">Den v týdnu</label>
            </th>
            <td>
              <select id="day" value={dayCode} onChange={handleDayChange}>
                {DAYS.map((day) => (
                  <option key={day.code} value={day.code}>
                    {day.name}
                  </option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <th>Král</th>
            <td>
              {MAGI.map((magus) => (
                <label key={magus.code}>
                  <input
                    type="radio"
                    value={magus.code}
                    onChange={handleMagusChange}
                    checked={magusCode === magus.code}
                  />
                  {magus.name}
                </label>
              ))}
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
          <tr>
            <th>Den</th>
            <td>
              <p>Kód dne: {dayCode}</p>
              <p>Jméno dne: {DAYS.find((day) => day.code === dayCode).name}</p>
            </td>
          </tr>
          <tr>
            <th>Král</th>
            <td>
              {magusCode === ""
                ? "Ještě nebyl vybrán žádný král."
                : MAGI.find((magus) => magus.code === magusCode).name}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

// pro každé políčku musíme zavést useState, potom v inputu zadám jako hodnotu proměnnou z useState
// přidám událost onChange a vrátím v ní setFirstName

// Knihovna pro práci s formuláři: Formik
