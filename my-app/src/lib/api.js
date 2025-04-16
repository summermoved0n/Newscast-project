import axios from 'axios';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_DATA_API_KEY;
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

const newsBaseURL = 'https://newsdata.io/api/1/latest?';

const countryName = 'Canada';
const weatherLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&limit=1&appid=${WEATHER_API_KEY}`;

export async function getWeatherByQuery() {
  console.log(weatherLocationURL);
  const { data } = await axios.get(weatherLocationURL);

  const countryLon = data[0].lon;
  const countryLat = data[0].lat;

  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${countryLat}&lon=${countryLon}&appid=${WEATHER_API_KEY}`
  );

  console.log(weather.data);

  return weather.data;
}

export async function getNews() {
  const { data } = await axios.get(
    `${newsBaseURL}apikey=${NEWS_API_KEY}&q=pizza`
  );
  console.log(data);
}
