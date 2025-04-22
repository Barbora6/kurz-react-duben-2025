public = složka na obrázky, videa, loga

src - zdrojový kód naší aplikace. Zde budeme přepisovat a upravovat vše podle toho, jak chceme, aby se naše aplikace chovala a vypadala.

1. Struktura React aplikace

- index.html basic html šablona a v body je <div> obsahující id="root", což je container pro naší aplikaci
- package.json - balíčky, knihovny a jejich verze, skripty
- README.md
- Ostatní složky a soubory můžeme zatím ignorovat

Single page application (jeden div v index.html do kterého se vše rendruje)

2. Tvorba komponenty
   Ve složce src si vytvořím nový soubor a pojmenuji ho například FirstComponent.jsx
   používám tzv. Pascal Case
   koncovka .jsx znamená, že komponenta je psaná v JavaScript XML
   - Vytvořím funkci (kterou za použití PascalCase pojmenuju)
   - Funkce musí něco vracet - return
   - Funkce mi bude vrací JSX (velmi podobné html, jen malé rozdíly)
   - Vše co vracím musí být obalené v jednom elementu
   - Funkci musím exportovat, abych ji mohl použít jinde v aplikaci

const FirstComponent = () => {
return
}

3. JSX
   Komponenty vrací JSX
   Jedná se o syntaktické rozšíření pro JS
   Vypadá jako HTML
   Mocné jako JS
   Používá se zejména v React aplikacích

4. JSX vs HTML
Místo class (jako u HTML) používám className
<h1 className="FirstComponent"> Hello <h1>
V JSX můžeme používat JS výrazy v kudrnatých závorkách
const name = 'ReactGirls';
const element = <h1>Hello, {name}<h1>;

5. další požadavek v JSX
Všechny tagy musí mít zavírací tag (jinka je to nevalidní syntax)
<div>...</div> / <span>...<span/>
nebo být tzv. self-closing <div/>

!!!!!!!!!!!!!!
Standardně vše, co komponenta vrací, musí být v jednom elementu
Víc elementů můžu zabalit do fragmentu
<></>
<Fragment></Fragment> (potřeba importovat z knihovny React)

6. Komponentu musím exportovat a poté importovat v tzv. parent komponentě
   import { FirstComponent } from "./FirstComponent";

7. PRAVIDLA ZALOŽENÍ KOMPONENTY
   Vytvořím funkci (kterou za použití PascalCase pojmenuju)
   Funkce musí něco vracet - return
   Funkce mi bude vrací JSX (velmi podobné html, jen malé rozdíly)
   Vše co vracím musí být obalené v jednom elementu
   Funkci musím exportovat, abych ji mohl použít (importovat) jinde v aplikaci
