import { Link } from "react-router-dom";
import leto from "../../images/leto.jpg";
import { Seasons } from "./Seasons";

export const Summer = () => {
  return (
    <Seasons heading="Léto" imageSource={leto} imageAlternativeText="léto">
      <p>
        Léto je roční období mezi jarem a podzimem. Nastává v mírných a
        polárních oblastech, v jinou dobu na severní a jižní polokouli. V
        různých oborech je definováno různě. Astronomické léto začíná letním
        slunovratem a končí podzimní rovnodenností.
        <br />
        <Link to="/">Roční období</Link>
      </p>
    </Seasons>
  );
};
