import "./App.css";
import { Button } from "./Button";
import { EmployeeTable } from "./EmployeeTable";
import { List } from "./List";
import { SecondComponent } from "./SecondComponent";

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
