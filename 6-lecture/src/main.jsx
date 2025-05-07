import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IntlProvider } from "react-intl";

createRoot(document.getElementById("root")).render(
  <IntlProvider locale="cs" messages={messages.cs}>
    <App />
  </IntlProvider>
);

const messages = {
  cs: {
    title: "Vícejazyčnost",
    greeting: "Ahoj, zdravím tě z vícejazyčné aplikace.",
    current_dateTime: "Aktuální čas"
  },
  en: {
    title: "Internationalization",
    greeting: "Hello from a multilingual application.",
    current_dateTime: "Current time"
  }
};
