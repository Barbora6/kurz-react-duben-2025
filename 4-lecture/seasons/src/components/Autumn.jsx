import { Link } from "react-router-dom";
import podzim from "../../images/podzim.jpg";
import { Seasons } from "./Seasons";

export const Autumn = () => {
  return (
    <Seasons
      heading="Podzim"
      imageSource={podzim}
      imageAlternativeText="podzimní listí"
    >
      <p>
        Podzim (zastarale jeseň) je jedno ze čtyř ročních období, je to přechod
        mezi létem a zimou. V klimatických podmínkách mírného pásu se právě na
        podzim sklízí většina úrody a opadavé listnaté stromy ztrácejí listí.
        Listí má různé barvy a opadává. Dny se krátí, ochlazuje se, více prší a
        je mnohem horší počasí.
        <Link to="/">Roční období</Link>
      </p>
    </Seasons>
  );
};
