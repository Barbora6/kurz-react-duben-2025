import { useEffect, useState } from "react";

export const PublicHoliday = () => {
  const [holidays, setHolidays] = useState();

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      const response = await fetch(
        "https://date.nager.at/api/v3/PublicHolidays/2025/CZ"
      );
      setHolidays(await response.json());
    };

    fetchAndSetHolidays();
  }, []);

  // [] pole závislostí
  // useEffect nesmí být async funkce

  return (
    <main>
      <header>
        <h1>Státní svátky roku 2025</h1>
      </header>
      <section>
        {holidays === undefined ? (
          <div>Data se načítají.</div>
        ) : (
          <ul>
            {holidays.map((holiday) => (
              <li>{holiday.localName}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
