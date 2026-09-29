const termek = { nev: 'Billentyűzet', ar: 14990, keszlet: 4 };

  const uj  = { ...termek, ar: 14990 - 14990*0.1, akcios: true };
  console.log(uj)
  console.log(termek)

