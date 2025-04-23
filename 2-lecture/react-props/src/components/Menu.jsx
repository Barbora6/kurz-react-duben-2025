export const Menu = () => {
  const textNadpisu = "Reactgirls akademie";

  const handleTitle = () => {
    console.log(textNadpisu);
  };

  return (
    <div>
      <h1>{textNadpisu}</h1>
      <ul>
        <li>Kurz Html, css</li>
        <li>Java Script 1</li>
        <li>Java Script 2</li>
        <li>React</li>
        <li>Tipe Script</li>
      </ul>
      <button onClick={handleTitle}>Klikni</button>
    </div>
  );
};
