import "./App.css";
import { Colors } from "./components/Colors";
import { Condition } from "./components/Condition";
import { Execise } from "./components/Execise.jsx";
import { List } from "./components/List";
import { ListFruits } from "./components/ListFruits.jsx";
import { Menu } from "./components/Menu";
import { Numbers } from "./components/Numbers";
import { People } from "./components/People";
import { PropsFruits } from "./components/PropsFruits.jsx";
import { PropsVegetables } from "./components/PropsVegetables.jsx";
import { User } from "./components/User";
import { UserGreeting } from "./components/UserGreeting.jsx";
import { lide } from "./lide.js";

function App() {
  // const user = {
  //   firstName: "Barbora",
  //   lastName: "Smetanová",
  //   age: 45
  // };

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 59 },
    { id: 5, name: "pineapple", calories: 205 }
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 28 },
    { id: 7, name: "celery", calories: 25 },
    { id: 8, name: "carrots", calories: 14 },
    { id: 9, name: "corn", calories: 32 },
    { id: 10, name: "broccoli", calories: 12 }
  ];

  return (
    <>
      {/* {fruits.length > 0 ? (
        <PropsFruits items={fruits} category="Fruits" />
      ) : null} */}

      {/* {vegetables.length > 0 ? (
        <PropsVegetables categoVeget="Vegetables" itemVeget={vegetables} />
      ) : null} */}

      {fruits.length > 0 && <PropsFruits items={fruits} category="Fruits" />}

      {vegetables.length > 0 && (
        <PropsVegetables categoVeget="Vegetables" itemVeget={vegetables} />
      )}

      {/* <ListFruits />
      <Menu />
      <Colors />
      <Numbers />
      <People />
      <Condition />
    
      <User
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
      /> */}
      <List />
      <User firstName={"Barbora"} lastName={"Smetanová"} />

      {lide.map((clovek) => {
        return (
          <User
            key={clovek.id}
            firstName={clovek.jmeno}
            lastName={clovek.prijmeni}
            age={clovek.vek}
          />
        );
      })}
      {/* <Execise
      firstName={'Filip'}  lastName={'Smetana'}/> 
      */}
      {/* <hr />
      <Execise firstName={"Filip"} lastName={"Smetana"} age={7} /> */}
      <hr />
      {lide.map((clovek) => {
        return (
          <Execise
            key={clovek.id}
            firstName={clovek.jmeno}
            lastName={clovek.prijmeni}
            age={clovek.vek}
          />
        );
      })}

      <hr />
      <UserGreeting name="Lukášku" surname="Smetano" isLoggedIn={true} />
    </>
  );
}

export default App;
