// CONDITIONAL RENDER

// export const UserGreeting = (props) => {
//   if (props.isLoggedIn) {
//     return (
//       <h2>
//         Ahoj {props.name} {props.surname} {props.age}
//       </h2>
//     );
//   } else {
//     return <h2>Prosím napište svoje jméno.</h2>;
//   }
// };

// export const UserGreeting = (props) => {

//   return props.isLoggedIn ? (
//     <h2>Ahoj, {props.name}</h2>
//   ) : (
//     <h2>Prosím zadejte svoje jméno...</h2>
//   );
// };

export const UserGreeting = (props) => {
  const welcomeMessage = <h2>Ahoj, {props.name}</h2>;

  const logginPrompt = <h2>Prosím zadejte svoje jméno...</h2>;

  return props.isLoggedIn ? welcomeMessage : logginPrompt;
};
