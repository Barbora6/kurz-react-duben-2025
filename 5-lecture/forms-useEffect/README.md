use Effect
Hook useEffect umožňuje vyvolat funkci pro synchronizaci komponenty s externím systémem ve vhodný okamžik
v nejjednodušší situaci při pouze prvním vykreslení komponenty
Prvním parametrem je funkce, kterou hook vyvolá
nejprve v ní načteme data
následně o načtená data aktualizujeme stav
tato funkce nesmí být asynchronní
Druhým parametrem je pole tzv. závislostí
Dokumentace: https://react.dev/reference/react/useEffect
