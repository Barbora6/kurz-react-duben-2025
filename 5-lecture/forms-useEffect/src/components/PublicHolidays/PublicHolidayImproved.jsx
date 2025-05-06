import { useEffect, useState } from "react";
import { Loader } from "../Loader";

const YEARS = ["2025", "2024", "2023", "2022", "2021"];

export const PublicHolidayImproved = () => {
  const [holidays, setHolidays] = useState();
  const [year, setYear] = useState("2025");

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/CZ`
      );
      setHolidays(await response.json());
    };

    fetchAndSetHolidays();
    // vykonej ho vždy znovu, když se změní rok
  }, [year]);

  // [] pole závislostí
  // useEffect nesmí být async funkce

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setHolidays(undefined);
  };

  return (
    <main>
      <header>
        <h1>Státní svátky roku 2025</h1>
      </header>
      <section>
        <select value={year} onChange={handleYearChange}>
          {YEARS.map((iterationYear) => (
            <option key={iterationYear} value={iterationYear}>
              {iterationYear}
            </option>
          ))}
        </select>
      </section>

      <section>
        {holidays === undefined ? (
          <div>
            <Loader />
          </div>
        ) : (
          <ol>
            {holidays.map((holiday) => (
              <li key={holiday.date}>
                <strong>{holiday.localName}</strong> (
                {new Date(holiday.date).toLocaleDateString()})
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
};
