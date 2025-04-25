import "./App.css";
import { Button } from "./Button";
import { EmployeeTable } from "./components/EmployeeTable";
import { Exercise } from "./components/Excise";
import { List } from "./components/List";
import { SecondComponent } from "./components/SecondComponent";

function App() {
  return (
    <>
      <Exercise name="Barbora" lastName="Smetanová" age={45} />
      <Button />
      <SecondComponent />
      <List />
      <EmployeeTable />
    </>
  );
}

export default App;
