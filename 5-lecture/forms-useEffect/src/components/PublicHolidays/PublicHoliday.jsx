import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { PublicHolidayImproved } from "./PublicHolidayImproved";

export const PublicHoliday = () => {
  const [holidays, setHolidays] = useState();

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      const response = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/2025/CZ`
      );
      setHolidays(await response.json());
    };

    fetchAndSetHolidays();
  }, []);

  return (
    <main>
      <header>
        <h1>Státní svátky v roce 2025</h1>
      </header>
      <section>
        {holidays === undefined ? (
          <Loader />
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
      <hr />
      <PublicHolidayImproved />
    </main>
  );
};
