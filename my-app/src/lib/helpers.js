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

export const changeDataFormat = (value) => {
  const date = new Date(value.replace(' ', 'T'));

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatted = date.toLocaleDateString('en-GB', options);

  return formatted;
};

export const capitalizeFirstLetter = (word) => {
  if (!word) return '';
  return String(word).charAt(0).toUpperCase() + String(word).slice(1);
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
