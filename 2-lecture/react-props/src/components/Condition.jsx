// 1. VARIANTA:

// export const Condition = () => {
//   const user = "Jonáš";

//   if (user === "Ondra") {
//     return <h1>Ahoj, Ondro!</h1>;
//   } else {
//     return <h1>Neznám, tě.</h1>;
//   }
// };

// 2. VARIANTA:
// export const Condition = () => {
//   const user = "Jonaš";

//   return <>{user === "Ondra" ? <h1>Ahoj, Ondro!</h1> : <h1>Neznám tě!</h1>}</>;
// };

// 2.VARIANTA:
// export const Condition = () => {
//   const user = "Barbora";

//   return user === "Barbora" ? (
//     <h1>Ahoj Barboro!</h1>
//   ) : (
//     <h1>Ahoj, neznám tě.</h1>
//   );
// };

// 3.VARIANTA

export const Condition = () => {
  const user = "Jonáš";

  return (
    <>
      {user === "Ondra" && <h1>Ahoj, Ondro!</h1>}
      {user !== "Ondra" && <h1>Neznám, tě!</h1>}
    </>
  );
};
