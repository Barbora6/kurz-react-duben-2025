export const List = () => {
  const menu = ["Úvod", "O nás", "Článek", "Kontakt"];

  return (
    <>
      <hr />
      <ul>
        {menu.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
      <hr />
    </>
  );
};

// Úkol: Použití .map() metody
// Vytvoř a vykresli komponentu List, ve které bude proměnná ‘menu’ a v ní hodnoty [“Úvod”, “O nás”, “Článek”, “Kontakt”]
// Pomocí metody .map() zobraz jednotlivé prvky pole

// Úkol: Ulož data zaměstnanců do proměnné (data na Slacku)
// Vytvoř a vykresli komponentu EmployeeTable, která renderuje seznam zaměstnanců jako tabulku
// Pomocí metody .map() zobraz jednotlivé řádky tabulky;
