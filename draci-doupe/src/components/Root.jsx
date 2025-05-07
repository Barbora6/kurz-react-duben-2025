import { Link, Outlet } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";

export const Root = () => {
  return (
    <div className="Root">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Úvod</Link>
            </li>
            <li>
              <Link to="/races">Rasy</Link>
            </li>
            <li>
              <Link to="/professions">Povolání</Link>
            </li>
          </ul>
        </nav>
        <div className="LanguageSelectorContainer">
          <LanguageSelector />
        </div>
      </header>
      <Outlet />
    </div>
  );
};
