import { FormattedMessage } from "react-intl";
import "./Races.css";

export const Races = () => {
  return (
    <main>
      <header>
        <h1>
          <FormattedMessage id="races_title" />
        </h1>
      </header>
      <section>
        <p>
          <FormattedMessage id="races_introduction" />
        </p>
      </section>
      <section>
        <ol>
          <li>
            <b>
              <FormattedMessage id="races_hobbit_name" />:
            </b>
            <p>
              <FormattedMessage id="races_hobbit_description" />
            </p>
          </li>
          <li>
            <b>
              <FormattedMessage id="races_kuduk_name" />:
            </b>
            <p>
              <FormattedMessage id="races_kuduk_description" />
            </p>
          </li>
          <li>
            <b>
              <FormattedMessage id="races_trpaslik_name" />:
            </b>
            <p>
              <FormattedMessage id="races_trpaslik_description" />
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
};
