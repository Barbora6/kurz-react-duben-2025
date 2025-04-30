import { Link } from "react-router-dom";
import jaro from "../../images/jaro.jpg";

export const Spring = () => {
  return (
    <div>
      <h1>Jaro</h1>
      <img src={jaro} alt="" />
      <p>
        Jaro (zastarale, příp. básnicky vesna) je jedno ze čtyř ročních období.
        V mírném pásu se vyznačuje začátkem vegetativní aktivity rostlin a
        zvýšením aktivity živočichů. Prodlužují se dny, otepluje se.
        <Link to="/">Roční období</Link>
      </p>
    </div>
  );
};
