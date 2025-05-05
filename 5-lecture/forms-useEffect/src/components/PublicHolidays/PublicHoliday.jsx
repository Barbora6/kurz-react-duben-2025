import { useEffect, useState } from "react";
import { Loader } from "../Loader";

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
          <ul>
            {holidays.map((holiday) => (
              <li>
                {holiday.localName}, {holiday.formatovaneDatum}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
