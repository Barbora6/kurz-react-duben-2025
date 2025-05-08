import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";
import { Introduction } from "./components/Introduction";
import { Races } from "./components/Races";
import { Professions } from "./components/Professions";
import {
  LanguageProvider,
  useLanguageContext
} from "./components/LanguageContext";
import { IntlProvider } from "react-intl";
import messagesCs from "./messages_cs.json";
import messagesEn from "./messages_en.json";

const messages = {
  cs: messagesCs,
  en: messagesEn
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Introduction /> },
      { path: "/races", element: <Races /> },
      { path: "/professions", element: <Professions /> }
    ]
  }
]);

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
const AppInner = () => {
  const { language } = useLanguageContext();
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <RouterProvider router={router}></RouterProvider>
    </IntlProvider>
  );
};

export default App;
