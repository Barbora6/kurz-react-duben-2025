import { Link } from "react-router-dom";
import zima from "../../images/zima.jpg";
import { Seasons } from "./Seasons";

export const Winter = () => {
  return (
    <Seasons
      heading="Zima"
      imageSource={zima}
      imageAlternativeText="Zimní krajina"
    >
      <p>
        Zima je jedno ze čtyř ročních období mezi podzimem a jarem střídajících
        se v mírných a polárních oblastech. Na severní polokouli nastává zima v
        době, kdy je na jižní polokouli léto, a obráceně. Astronomická zima
        začíná o zimním slunovratu, kdy je nejdelší noc a nejkratší den. Je
        obdobím s nejnižšími teplotami.
        <Link to="/">Roční obodobí</Link>
      </p>
    </Seasons>
  );
};
