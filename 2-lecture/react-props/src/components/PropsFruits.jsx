export const PropsFruits = ({ category, items }) => {
  const categoryItem = category;
  const itemList = items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; ({item.calories}kcal);
    </li>
  ));

  return (
    <>
      <h3>{categoryItem}</h3>
      <ol>{listItems}</ol>
    </>
  );
};
