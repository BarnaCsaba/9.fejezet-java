const helyezettek = ['Anna', 'Béla', 'Csilla', 'Dávid', 'Emese'];
// let tobbiek = []

const [arany = helyezettek[0], ezust = helyezettek[1], ...tobbiek] =helyezettek

console.log(`Arany: ${arany}, ezüst: ${ezust}, további helyezettek: ${tobbiek}`)


