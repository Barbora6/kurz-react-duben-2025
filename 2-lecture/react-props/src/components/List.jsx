// export const List = () => {
//   const emptyArray = ["Barbora"];

//   if (emptyArray.length === 0) {
//     return null;
//   }
//
// return (
// (
//        <ul>
//            {emptyArray.map((item) => (<li key={item}>    {item}</li>))}
// </ul>
// )
// )

// 2. VARIANTA - procvičování, varianta s else:

// export const List = () => {
//   const emptyArray = ["Barbora"];

//   //   if (emptyArray.length === 0) {
//   //     return <h3>List je prázdný!</h3>;
//   //   } else {
//   //     return emptyArray.map((item) => <li key={item}>{item}</li>);
//   //   }

//   return (
//     emptyArray.length > 0 && (
//       <ul>
//         {emptyArray.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     )
//   );
// };

// 3. VARIANTA:

// export const List = () => {
//   const emptyArray = [];

//   if (emptyArray.length === 0) {
//     return prompt("Zadejte svoje jméno:");
//   } else {
//     return emptyArray.map((jmeno) => <li key={jmeno}>{jmeno}</li>);
//   }
// };

// PODMÍNĚNÝ RENDERING (zobrazení podle podmínky)
// jestli je pole prázdné, tak komponenta nezobrazí nic null
// pokud pole má nějaké položky pak se zobrazí <ul> se seznamem <li></li></ul>
// export const List = () => {
//   const emptyArray = [];

//   return emptyArray.length === 0 ? null : (
//     <ul>
//       {emptyArray.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// PODMÍNĚNÉ VYKRESLENÍ POMOCÍ &&

// export const List = () => {
//   const emptyArray = [];
//   return (
//     emptyArray.length > 0 && (
//       <ul>
//         {emptyArray.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     )
//   );
// };

// PROCVIČOVÁNÍ
// export const List = () => {
//   const pole = [];

//   return pole.length === 0 ? (
//     <h1>Pole nemá žádné čísla</h1>
//   ) : (
//     prompt("Zadej číslo do 100:")
//   );
// };

export const List = () => {
  const pole = [1, 2, 3, 4, 5, 8, 9, 7, 8];

  if (pole.length > 0) {
    return (
      <div>
        <h2>Pole má následující hodnoty:</h2>
        {pole.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  } else {
    return <p>Zadej číslo do 10:</p>;
  }
};
