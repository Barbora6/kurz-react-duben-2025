export const Button = () => {
  const handleClick = () => {
    console.log("Bylo kliknuto na tlačítko!");
  };
  return <button onClick={handleClick}>Klikni</button>;
};
