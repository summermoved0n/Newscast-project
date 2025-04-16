export const changeKelvinToCelsius = (temperature) => {
  const celsius = temperature - 273.15;
  return Math.round(celsius);
};
