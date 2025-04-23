export const Menu = () => {
  const textNadpisu = "Reactgirls akademie";
  const menuItems = ["kurz Html, Css", "Java Script 1", "React", "TypeScript"];

  const handleTitleClick = () => {
    console.log(textNadpisu);
  };

  return (
    <div>
      <h1>{textNadpisu}</h1>
      <p>
        1.Úkol: V aplikaci vytvoř a zobraz novou komponentu Menu, která bude
        vracet nadpis (h1), list (ul) libovolných stringů (li) a tlačítko
        (button) Text nadpisu ulož do proměnné a použij v JSX Po kliknutí na
        tlačítko se do konzole vypíše nadpis, který je uložený v proměnné
      </p>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleTitleClick}>Klikni</button>
    </div>
  );
};
