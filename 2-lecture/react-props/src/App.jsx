import "./App.css";
import { Colors } from "./components/Colors";
import { Condition } from "./components/Condition";
import { List } from "./components/List";
import { Menu } from "./components/Menu";
import { Numbers } from "./components/Numbers";
import { People } from "./components/People";

function App() {
  return (
    <>
      <Menu />
      <Colors />
      <Numbers />
      <People />
      <Condition />
      <List />
    </>
  );
}

export default App;
