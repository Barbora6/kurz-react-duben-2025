export const Numbers = () => {
  const arrayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  //   const filterNumbers = arrayNumbers.filter((number) => number < 6);

  return (
    <div>
      <hr />
      <h1>Pole čísel</h1>
      <p>
        Úkol 3: Vytvoř si komponentu Numbers Do ní vytvoř pole numbers a přidej
        čísla od 1 do 10 Vyfiltruj si čísla menší než 6 (pomocí .filter()) a
        vypiš je do seznamu (.map()) Můžeme metody skládat za sebou, pro někoho
        může být přehlednější to dělat postupně Nezapomeň přidat key
      </p>
      <ul>
        {arrayNumbers
          .filter((number) => number < 6)
          .map((number) => (
            <li key={number}>{number}</li>
          ))}
      </ul>
    </div>

    // <ul>
    //   {filterNumbers.map((number) => {
    //     return <li key={number}>{number}</li>;
    //   })}
    // </ul>
  );
};
