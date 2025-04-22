export const List = () => {
  const menu = ["Úvod", "O nás", "Článek", "Kontakt"];

  return (
    <ul>
      {menu.map((list) => {
        return <li>{list}</li>;
      })}
    </ul>
  );
};

// Použití .map() metody
// Vytvoř a vykresli komponentu List, ve které bude proměnná ‘menu’ a v ní hodnoty [“Úvod”, “O nás”, “Článek”, “Kontakt”]
// Pomocí metody .map() zobraz jednotlivé prvky pole
