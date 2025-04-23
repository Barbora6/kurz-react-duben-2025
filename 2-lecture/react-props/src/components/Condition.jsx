export const Condition = () => {
  const user = "Barbora";

  return user === "Barbora" ? (
    <h1>Ahoj Barboro!</h1>
  ) : (
    <h1>Ahoj, neznám tě.</h1>
  );
};
