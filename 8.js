
function statisztika(...szamok) {
    const db = szamok.length;

    if (db === 0) {
        console.log('{ db: 0, osszeg: 0, max: 0 }');
        return;
    }

    const osszeg = szamok.reduce((sum, value) => sum + value, 0);
    const max = Math.max(...szamok);

    console.log(`{ db: ${db}, osszeg: ${osszeg}, max: ${max} }`);
}

statisztika(7);
statisztika(4, 8, 15, 16, 23, 42);