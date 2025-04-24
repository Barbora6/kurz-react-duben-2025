export const PropsVegetables = ({ categoVeget, itemVeget }) => {
  const categoryVegetables = categoVeget;
  const itemVegetablebles = itemVeget;

  const listVegetables = itemVegetablebles.map((item) => (
    <li key={item.id}>
      {item.name}, ({item.calories}kcal)
    </li>
  ));

  return (
    <>
      <h3>{categoryVegetables}</h3>
      <ul>{listVegetables}</ul>
    </>
  );
};
