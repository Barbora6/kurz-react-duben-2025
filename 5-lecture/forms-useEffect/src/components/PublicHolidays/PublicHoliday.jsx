import { useEffect, useState } from "react";
import { Loader } from "../Loader";

const YEARS = ["2025", "2024", "2023", "2022", "2021"];

export const PublicHoliday = () => {
  const [holidays, setHolidays] = useState();
  const [year, setYear] = useState("2025");

  const handleYearChange = (even) => {
    setYear(even.target.value);
  };

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/2025/CZ`
      );
      setHolidays(await response.json());
    };

    fetchAndSetHolidays();
    // vykonej ho vždy znovu, když se změní rok
  }, [year]);

  // [] pole závislostí
  // useEffect nesmí být async funkce

  // const datum = new Date(holiday.date);
  // const formatovaneDatum = datum.toLocaleDateString("cs-CZ", {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric"
  // });

  return (
    <main>
      <header>
        <h1>Státní svátky roku 2025</h1>
      </header>
      <section>
        {holidays === undefined ? (
          <div>
            <Loader />
          </div>
        ) : (
          <>
            {/* DOPSATS */}
            {/* <select value={year} onChange={handleYearChange}>
              {YEARS.map((year) => (
                <li>{year}</li>
              ))}
            </select> */}
            <ul>
              {holidays.map((holiday) => (
                <li>
                  {holiday.localName}, {holiday.formatovaneDatum}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
};
