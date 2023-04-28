export const formatTimeString = (timeUTC: string) => {
  const userLocale = navigator.language;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dateTimeUtcString = `1970-01-01T${timeUTC}Z`;
  const dateTimeUtc = new Date(dateTimeUtcString);

  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const timeLocalString = dateTimeUtc.toLocaleTimeString(userLocale, timeOptions);

  console.log(timeLocalString);
};

formatTimeString('13:30:00');
