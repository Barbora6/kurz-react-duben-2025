import { lide } from "../lide.js";

export const People = () => {
  const filterOldPeople = lide.filter((filterPeople) => filterPeople.vek > 30);

  return (
    <div>
      <hr />
      <h1>Vypiš lidi starší 30let</h1>
      <ul>
        {filterOldPeople.map((person) => {
          return (
            <li key={person.id}>
              {person.jmeno} {person.prijmeni} ({person.vek})
            </li>
          );
        })}
      </ul>
    </div>
  );
};
