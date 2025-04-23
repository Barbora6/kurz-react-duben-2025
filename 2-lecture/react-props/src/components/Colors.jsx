export const Colors = () => {
  const colors = ["bílá", "černá", "červená", "zelená", "oranžová"];
  return (
    <div>
      <hr />
      <h1>Možnosti barev</h1>
      <p>
        Úkol 2: Vytvoř si komponentu Colors Do ní vytvoř pole colors a přidej
        libovolné barvy (minimálně 5) Vypiš barvy do seznamu pomocí .map()
        metody Nezapomeň přidat key
      </p>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
};
