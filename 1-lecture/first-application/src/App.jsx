import "./App.css";
import { Button } from "./Button";
import { EmployeeTable } from "./components/EmployeeTable";
import { List } from "./components/List";
import { SecondComponent } from "./components/SecondComponent";

function App() {
  return (
    <>
      <Button />
      <SecondComponent />
      <List />
      <EmployeeTable />
    </>
  );
}

export default App;
