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

Úkol 2:

Vytvoř si komponentu Colors
Do ní vytvoř pole colors a přidej libovolné barvy (minimálně 5)
Vypiš barvy do seznamu pomocí .map() metody
Nezapomeň přidat key

Úkol 3:
Vytvoř si komponentu Numbers
Do ní vytvoř pole numbers a přidej čísla od 1 do 10
Vyfiltruj si čísla menší než 6 (pomocí .filter()) a vypiš je do seznamu (.map())
Můžeme metody skládat za sebou, pro někoho může být přehlednější to dělat postupně
Nezapomeň přidat key

Úkol 4:
Ulož soubor lide.js do složky src
Vytvoř si komponentu People
Ulož si data do proměnné people
Vytvoř seznam jmen lidí, kteří jsou starší než 30 let
Použij metody .filter() a .map()
Do komponenty People vypiš jméno, příjmení i věk
