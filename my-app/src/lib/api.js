import axios from 'axios';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_DATA_API_KEY;
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_SEARCH_VIDEO_API_KEY;

const pixabayBaseURL = `https://pixabay.com/api/videos/?key=${PIXABAY_API_KEY}&q=computer+games`;

const getCountryWeatherInfoURL =
  'https://api.openweathermap.org/data/2.5/weather?';

const newsBaseURL = 'https://newsdata.io/api/1/';

export async function getWeatherByQuery() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;

            const weather = await axios.get(
              `${getCountryWeatherInfoURL}lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
            );

            if (weather) {
              resolve(weather.data); // Повертає дані погоди
            } else {
              reject(weather); // Повертає помилку з API
            }
          } catch (err) {
            reject(err); // Помилка запиту
          }
        },
        (error) => {
          reject(error); // Помилка геолокації
        }
      );
    } else {
      reject(new Error('Геолокація не підтримується у цьому браузері.'));
    }
  });
}

export async function getNews() {
  try {
    const { data } = await axios.get(
      `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=top&language=en`
    );

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.results;
  } catch (error) {}
}

export async function getNewsByQuery(value) {
  try {
    const { data } = await axios.get(
      `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=${value}&language=en`
    );

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.results;
  } catch (error) {}
}

export async function getImportantNews() {
  try {
    const { data } = await axios.get(
      `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=important&language=en`
    );

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.results;
  } catch (error) {}
}

export async function getEntertainmentNews() {
  try {
    const { data } = await axios.get(
      `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=entertainment&language=en`
    );

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.results;
  } catch (error) {}
}

export async function getSportsNews() {
  try {
    const { data } = await axios.get(
      `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=sport&language=en`
    );

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.results;
  } catch (error) {}
}

export async function getLifeStyleNews() {
  try {
    const { data } = await axios.get(
      `${newsBaseURL}latest?apikey=${NEWS_API_KEY}&q=life+style&language=en`
    );

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.results;
  } catch (error) {}
}

export async function getPixabayVideo() {
  try {
    const { data } = await axios.get(pixabayBaseURL);

    if (!data) throw new Error('Oups 🤷‍♂️');

    return data.hits;
  } catch (error) {}
}
