import axios from 'axios';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_DATA_API_KEY;
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_SEARCH_VIDEO_API_KEY;

const pixabayBaseURL = `https://pixabay.com/api/videos/?key=${PIXABAY_API_KEY}&q=computer+games`;

const newsBaseURL = 'https://newsdata.io/api/1/';

const countryName = 'Oshawa';
const weatherLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&limit=1&appid=${WEATHER_API_KEY}`;
const getCountryWeatherInfoURL =
  'https://api.openweathermap.org/data/2.5/weather?';

export async function getWeatherByQuery() {
  const { data } = await axios.get(weatherLocationURL);

  const countryLon = data[0].lon;
  const countryLat = data[0].lat;

  const weather = await axios.get(
    `${getCountryWeatherInfoURL}lat=${countryLat}&lon=${countryLon}&appid=${WEATHER_API_KEY}`
  );

  return weather.data;
}

export async function getNews() {
  const { data } = await axios.get(
    `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=top&language=en`
  );

  return data.results;
}

export async function getImportantNews() {
  const { data } = await axios.get(
    `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=important&language=en`
  );

  return data.results;
}

export async function getEntertainmentNews() {
  const { data } = await axios.get(
    `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=entertainment&language=en`
  );

  return data.results;
}

export async function getSportsNews() {
  const { data } = await axios.get(
    `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=sport&language=en`
  );

  return data.results;
}

export async function getLifeStyleNews() {
  const { data } = await axios.get(
    `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=life+style&language=en`
  );

  return data.results;
}

export async function getPixabayVideo() {
  const { data } = await axios.get(pixabayBaseURL);

  return data.hits;
}
