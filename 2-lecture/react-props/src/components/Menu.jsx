export const Menu = () => {
  const textNadpisu = "Reactgirls akademie";
  const menuItems = ["Kurz Html, css", "Java Script 1", "React", "TypeScript"];

  const handleTitleClick = () => {
    console.log(textNadpisu);
  };

  return (
    <div>
      <h1>{textNadpisu}</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleTitleClick}>Klikni</button>
    </div>
  );
};
