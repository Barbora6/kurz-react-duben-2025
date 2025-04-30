import { Link } from "react-router-dom";
import leto from "../../images/leto.jpg";

export const Summer = () => {
  return (
    <div>
      <h1>Léto</h1>
      <img src={leto} alt="" />
      <p>
        Léto je roční období mezi jarem a podzimem. Nastává v mírných a
        polárních oblastech, v jinou dobu na severní a jižní polokouli. V
        různých oborech je definováno různě. Astronomické léto začíná letním
        slunovratem a končí podzimní rovnodenností.
        <br />
        <Link to="/">Roční období</Link>
      </p>
    </div>
  );
};
