import "./App.css";
import { Colors } from "./components/Colors";
import { Condition } from "./components/Condition";
import { Execise } from "./components/Execise.jsx";
import { List } from "./components/List";
import { ListFruits } from "./components/ListFruits.jsx";
import { Menu } from "./components/Menu";
import { Numbers } from "./components/Numbers";
import { People } from "./components/People";
import { User } from "./components/User";
import { UserGreeting } from "./components/UserGreeting.jsx";
import { lide } from "./lide.js";

function App() {
  // const user = {
  //   firstName: "Barbora",
  //   lastName: "Smetanová",
  //   age: 45
  // };

  return (
    <>
      <ListFruits />
      <Menu />
      <Colors />
      <Numbers />
      <People />
      <Condition />
      <List />
      {/* <User
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
      /> */}
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
      <hr />
      <Execise firstName={"Filip"} lastName={"Smetana"} age={7} />
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
