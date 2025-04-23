import { lide } from "../lide.js";

export const People = () => {
  //   const filterOldPeople = lide.filter((filterPeople) => filterPeople.vek > 30);

  const people = lide;

  const older30 = people.filter((clovek) => clovek.vek > 30);

  return (
    <div>
      <hr />
      <h1>Vypiš lidi starší 30let</h1>
      <p>
        Úkol 4: Ulož soubor lide.js do složky src Vytvoř si komponentu People
        Ulož si data do proměnné people Vytvoř seznam jmen lidí, kteří jsou
        starší než 30 let Použij metody .filter() a .map() Do komponenty People
        vypiš jméno, příjmení i věk
      </p>
      {/* <ul>
        {filterOldPeople.map((person) => {
          return (
            <li key={person.id}>
              {person.jmeno} {person.prijmeni} ({person.vek})
            </li>
          );
        })}
      </ul> */}

      <ul>
        {older30.map((clovek) => (
          <li key={clovek.id}>
            {clovek.jmeno} {clovek.prijmeni} ({clovek.vek})
          </li>
        ))}
      </ul>
    </div>
  );
};
