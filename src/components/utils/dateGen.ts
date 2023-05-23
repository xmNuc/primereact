const formatujGodzineUTC = (godzinaUTC: string): Date => {
  const [godzina, minuta] = godzinaUTC.split(':').map(Number);
  return new Date(
    Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      godzina,
      minuta
    )
  );
};

const godzinaUTC = '11:00';
const sformatowanaGodzina = formatujGodzineUTC(godzinaUTC);
console.log(sformatowanaGodzina);
