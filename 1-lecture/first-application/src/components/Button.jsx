// export const Button = () => {
//   let count = 0;

//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name}, klikl jsi na mě ${count}krát.`);
//     } else {
//       console.log(`${name}, přestaň na mě klikat!`);
//     }
//   };
//   return <button onClick={() => handleClick("Báro")}>Klikni</button>;
// };

export const Button = () => {
  let count = 0;

  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name}, klikl jsi na mě ${count}krát.`);
    } else {
      console.log(`${name}, už na mě neklikej.`);
    }
  };

  return <button onClick={() => handleClick("Filipe")}>Klikni</button>;
};
