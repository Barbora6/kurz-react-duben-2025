import { Link } from "react-router-dom";
import rocniobdobi from "../../images/rocni-obdobi.jpg";

export const Seasons = () => {
  return (
    <div>
      <h1>Roční období</h1>
      <br />
      <Link to="/spring">Jaro</Link>
      <br />
      <Link to="/summer">Léto</Link>
      <br />
      <Link to="/autumn">Podzim</Link>
      <br />
      <Link to="/winter">Zima</Link>
      <img src={rocniobdobi} alt="" />
      <p>
        Roční období je jedna z hlavních částí roku. Obvykle se roční období
        vyznačuje opakovanou pravidelnou změnou počasí. V tropickém a
        subtropickém pásu se obvykle mluví o období dešťů (monzunovém období) a
        období sucha, neboť změny v množství srážek jsou mnohem výraznější než
        změna průměrné teploty.
      </p>
    </div>
  );
};
