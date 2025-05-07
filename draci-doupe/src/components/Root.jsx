import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="Root">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Úvod</Link>
            </li>
            …
          </ul>
        </nav>
        <div className="LanguageSelectorContainer"></div>
      </header>
      <Outlet />
    </div>
  );
};
