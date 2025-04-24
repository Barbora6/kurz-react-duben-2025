// export const List = () => {
//   const emptyArray = ["Barbora"];

//   if (emptyArray.length === 0) {
//     return null;
//   }
//
// return <ul>
// emptyArray.map((item) => <li key={item}>{item}</li>)</ul>

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

export const List = () => {
  const emptyArray = [];

  if (emptyArray.length === 0) {
    return prompt("Zadejte svoje jméno:");
  } else {
    return emptyArray.map((jmeno) => <li key={jmeno}>{jmeno}</li>);
  }
};
