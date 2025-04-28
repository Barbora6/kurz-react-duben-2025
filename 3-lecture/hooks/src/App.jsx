import { Animals } from "./components/Animals";
import { IncreaseByOne } from "./components/IncreaseByOne";
import { Students } from "./components/Students";
import { User } from "./components/User";
import { lide } from "./lide";

function App() {
  const firstName = "Barbora";

  const lastName = "Smetanová";

  return (
    <>
      {/* <User firstName={firstName} lastName={lastName} />
      <Students lide={lide} /> */}
      {/* <IncreaseByOne /> */}
      <Animals />
    </>
  );
}

export default App;
