import { FormattedMessage } from "react-intl";
import "./Professions.css";

export const Professions = () => {
  return (
    <main>
      <header>
        <h1>
          <FormattedMessage id="professions_name" />
        </h1>
      </header>
      <section>
        <p>
          <FormattedMessage id="professions_introduction" />
        </p>
        <ul>
          <li>
            <strong>
              <FormattedMessage id="professions_warrior_name" />
            </strong>
            <p>
              <FormattedMessage id="professions_warrior_description" />
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};
