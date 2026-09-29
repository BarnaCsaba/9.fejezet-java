const nev = 'Egér';
const ar = 6990;
const mezo = 'szin';
const ertek = 'fekete';

const termek = {
  nev,
  ar,
  [mezo]: ertek,
  leiras() {
    return `${this.nev} - ${this.szin} - ${this.ar} Ft`;
  }
};

console.log(termek.szin);
console.log(termek.leiras());