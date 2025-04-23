import "./App.css";
import { Colors } from "./components/Colors";
import { Condition } from "./components/Condition";
import { List } from "./components/List";
import { Menu } from "./components/Menu";
import { Numbers } from "./components/Numbers";
import { People } from "./components/People";
import { User } from "./components/User";
import { lide } from "./lide.js";

function App() {
  // const user = {
  //   firstName: "Barbora",
  //   lastName: "Smetanová",
  //   age: 45
  // };

  return (
    <>
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
    </>
  );
}

export default App;
