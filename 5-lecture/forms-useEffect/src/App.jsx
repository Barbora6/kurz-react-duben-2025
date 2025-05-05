import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <main className="App">
        <header>
          <h1>Lekce 5</h1>
        </header>
        <section>
          <ul>
            <li>
              <Link to="/forms">Formulářové prvky v Reactu</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
