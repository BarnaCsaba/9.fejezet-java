const termek = { nev: 'Egér', ar: 6990, keszlet: 12, kategoria: 'periféria' };


const { nev, ar:egysegar, garancia = 12 } = termek;


console.log(`${nev} – egységár: ${egysegar} Ft, garancia: ${garancia} hónap`)