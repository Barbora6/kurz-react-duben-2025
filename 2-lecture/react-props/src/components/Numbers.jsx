export const Numbers = () => {
  const arrayNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  //   const filterNumbers = arrayNumbers.filter((number) => number < 6);

  return (
    <div>
      <hr />
      <h1>Pole čísel</h1>
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
