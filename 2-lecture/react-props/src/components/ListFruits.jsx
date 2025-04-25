export const ListFruits = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 59 },
    { id: 5, name: "pineapple", calories: 205 }
  ];

  //   seřadí ovoce v abecedním pořadí a-z
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));

  //   v abecedním pořadí
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));

  //   fruits.sort((a,b) => a.calories - b.calories)

  //   fruits.sort((a, b) => b.calories - a.calories);

  //   FUNKCE, KTERÁ VYPÍŠE OVOCE, KTERÉ MÁ MÉNĚ NEŽ 100kcal
  const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = lowCalFruit.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp; ({lowCalFruit.calories}kcal);
    </li>
  ));

  //   FUNKCE, KTERÁ VYPÍŠE OVOCE, KTERÉ MÁ VÍCE NEŽ 100kcal
  //   const highCalFruit = fruits.filter((fruit) => fruit.calories >= 100);

  //   const listItems = highCalFruit.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}: &nbsp; ({highCalFruit.calories}kcal);
  //     </li>
  //   ));

  const listItems1 = fruits.map((fruits) => (
    <li key={fruits.id}>
      {fruits.name}: &nbsp; <b>({fruits.calories}kcal)</b>;
    </li>
  ));

  return (
    <>
      {" "}
      <ol>{listItems1}</ol>
      <ol>{listItems}</ol>;
    </>
  );
};
