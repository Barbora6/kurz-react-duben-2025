externí terminál, pomocí cd přejít do složky
npm create vite@latest

Vytvoř novou react aplikaci pomocí VITE
npm create vite@latest
projdi průvodce
Spusť aplikaci pomocí
cd nazev
npm install
npm run dev

1.Úkol:
V aplikaci vytvoř a zobraz novou komponentu Menu, která bude vracet nadpis (h1), list (ul) libovolných stringů (li) a tlačítko (button)
Text nadpisu ulož do proměnné a použij v JSX
Po kliknutí na tlačítko se do konzole vypíše nadpis, který je uložený v proměnné

Array metody a key atribut
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
.map(), .filter(), .flat() a další
Pro úpravu dat, které získáme (ze serveru) například jako pole objektů

Atribut key
Pokud tvoříme pole komponent (např. pomocí .map()), React potřebuje pro každý prvek pole unikátní klíč (viz chyba v konzoli)
Je to z toho důvodu, že když data aktualizujeme, (přidáváme, mažeme apod.) unikátní klíče umožňují správně identifikovat, o který prvek jde
Nějaké id je ideální jako unikátní klíč
pokud ho máme v datech
Ukázka na příkladu ->
