function convertToUtc(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);

  const date = new Date();
  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);

  const utcTime = `${date.getUTCHours()}:${date.getUTCMinutes().toString().padStart(2, '0')}`;

  return utcTime;
}

// Przykładowe użycie funkcji
const localTime = '11:30';
const utcTime = convertToUtc(localTime);

console.log(`Czas lokalny: ${localTime}`);
console.log(`Czas UTC: ${utcTime}`);

function convertToUtc2(time: string): string {
  const [hours, minutes] = time.split(':').map(Number);

  const localDate = new Date();
  localDate.setHours(hours);
  localDate.setMinutes(minutes);

  const utcTime = localDate.toUTCString().split(' ')[4].slice(0, 5);

  return utcTime;
}

// Przykładowe użycie funkcji
const localTime = '11:30';
const utcTime = convertToUtc(localTime);

console.log(`Czas lokalny: ${localTime}`);
console.log(`Czas UTC: ${utcTime}`);
