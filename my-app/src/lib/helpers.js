const daysArray = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const changeKelvinToCelsius = (temperature) => {
  const celsius = temperature - 273.15;
  return Math.round(celsius);
};

export const correctFormOfData = () => {
  const date = new Date();

  const weekday = daysArray[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = monthsArray[date.getMonth()];
  const year = date.getFullYear();

  return `${weekday}, ${day} ${month} ${year}`;
};
