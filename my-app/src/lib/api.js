import axios from 'axios';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_DATA_API_KEY;
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

const newsBaseURL = 'https://newsdata.io/api/1/latest?';

const weatherLocationURL =
  'http://api.openweathermap.org/geo/1.0/direct?q=Canada&limit=1&';

export async function getWeatherByQuery() {
  console.log(WEATHER_API_KEY);
  const { data } = await axios.get(
    `${weatherLocationURL}appid=${WEATHER_API_KEY}`
  );

  const countryLon = data[0].lon;
  const countryLat = data[0].lat;

  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${countryLat}&lon=${countryLon}&appid=${WEATHER_API_KEY}`
  );
  console.log(weather);
}

export async function getNews() {
  const { data } = await axios.get(
    `${newsBaseURL}apikey=${NEWS_API_KEY}&q=pizza`
  );
  console.log(data);
}
