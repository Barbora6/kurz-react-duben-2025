useState
Jedná se o paměť komponenty
Komponenta si zaznamenává interakci uživatele (například uživatel přidává do košíku)
Lokální proměnné se neukládají mezi rendery, potřebujeme udržovat stav, který se mezi rendery drží
Změny lokálních proměnných nezpůsobí re-render komponenty

Pokud chceme aktualizovat komponentu novými daty, musíme :

1. Uložit data mezi rendery
2. Donutit komponentu se re-renderovat s novými daty
   Použijeme na to useState hook, který uloží stav a zároveň poskytuje funkci, která stav změní a způsobí re-render komponenty

useState je hook
Hooky jsou speciální funkce https://react.dev/reference/react/hooks
Jejich pojmenování začíná slovem “use…”
Existuje několik built-in hooků, ale je možné si vytvořit i tzv. vlastní hooky (my se v rámci akademie seznámíme s několika dalšími, vlastní si zatím tvořit nebudeme)
Lze je volat vždy pouze na nejvyšší úrovni komponenty, nelze je volat v podmínkách, cyklech a dalších funkcích

const [index, setIndex] = useState(0);
Importovat useState z react knihovny
import { useState } from "react";
Zápis: const [something, setSomething] = useState()
“something” je aktuální stav, “setSomething” je funkce, která nastaví nový stav a re-renderuje komponentu
Pokud je něco v závorkách useState() je to počáteční hodnota

Komponenta může mít větší počet stavů a různé typy například:
Komponenta StudentViewer bude mít další stav:
const [showMore, setShowMore] = useState(false);
Stav showMore a index jsou na sobě nezávislé

Stav je lokální pro komponentu, když použiju komponentu StudentViewer dvakrát pod sebou, stav bude lokální a nezávislý, pro každou komponentu zvlášť

PROCVIČOVÁNÍ:
Vytvoř komponentu IncreaseByOne
Komponenta bude vracet button a paragraf
Stav komponenty ulož pomocí useState
V paragrafu zobraz aktuální číslo
Vytvoř funkci, která po kliknutí na button zvýší číslo o jedna
Počáteční číslo bude 1

PROCVIČOVÁNÍ:
Přidej do komponenty IncreaseByOne následující logiku
Pokud bude číslo sudé zobrazí se text “Even number”, pokud bude liché nezobrazí se nic

SPREAD OPERATOR = slouží pro zkopírování pole (říká, vezmi obsah numbers a vytvoř new_numbers a přidej tam 6)
Umožňuje nám “rozbalit” elementy
Příklad:
const numbers = [1, 2, 3, 4, 5]
numbers.push(6);
const new_numbers = [...numbers, 6]

Umožňuje nám teké “rozbalit” prvky
Příklad:
const props ={firstName:”Pavel”,lastName: “Novak”}
const User = (props)=>{
return <UserDetail {...props} />
}

Komponenta User dostane od rodiče props a vykreslí je s komponentou UserDetail (vše co je v ...props)
