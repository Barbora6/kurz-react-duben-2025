import { useState } from "react";

export const IncreaseByOne = () => {
  const [index, setIndex] = useState(6);

  const handleClick = () => {
    setIndex(index + 1);
  };

  if (index % 2 === 0) {
    return <h2>Even number!</h2>;
  }

  return (
    <>
      <p>{index}</p>
      <button onClick={handleClick}>Klikni</button>
      {/* <p>{index % 2 === 0 ? "Number is even" : ""}</p> */}
    </>
  );
};

// Procvičování:
// Vytvoř komponentu IncreaseByOne
// Komponenta bude vracet button a paragraf
// Stav komponenty ulož pomocí useState
// V paragrafu zobraz aktuální číslo
// Vytvoř funkci, která po kliknutí na button zvýší číslo o jedna
// Počáteční číslo bude 1
