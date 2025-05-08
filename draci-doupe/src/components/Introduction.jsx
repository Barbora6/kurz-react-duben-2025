import { FormattedMessage } from "react-intl";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <main>
      <header>
        <h1>
          <FormattedMessage id="introduction_draciDoupe_name" />
        </h1>
        <p>
          je česká fantasy hra na hrdiny, kterou v roce 1990 vytvořilo
          nakladatelství Altar. Hra vychází z americké hry na hrdiny Dungeons &
          Dragons (D&D). Průběh hry řídí jeden hráč nazývaný Pán jeskyně,
          ostatní hráči hrají za jednotlivé postavy, která má každá svou rasu
          (člověk, elf, trpaslík ap.) a povolání (válečník, zloděj, čaroděj
          ap.).
        </p>
        <p>
          V roce 2004 vyšla nová hra Dračí doupě Plus (tzv. „Pluska“) s
          komplikovaným jednotným systémem založeným na převodových
          logaritmických tabulkách, určená spíše pokročilejším hráčům. V roce
          2011 vyšlo Dračí doupě II, jehož cílem je nahradit staré Dračí doupě
          jednodušším a ucelenějším systémem, snadným pro začátečníky. Tyto hry
          mají tematickou návaznost na původní Dračí doupě, ale herní systém se
          liší.
        </p>
      </header>
      <section>
        <p>
          <FormattedMessage id="introduction_draciDoupe_description" />
        </p>
      </section>
    </main>
  );
};
