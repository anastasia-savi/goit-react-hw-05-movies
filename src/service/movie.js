import axios from 'axios';

const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjE4ZDMxY2Y5NWY3MzRhNjkyMTdiZDcxMjY3YTc5YSIsInN1YiI6IjY0Y2E0ZGNhZGQ4M2ZhMDExYzg3MTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5GujH5fhmYRNEQEfX2T8JNYEfA5YJXbvdxmehC3Gpw';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
export const getMovies = async (movieId) => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const response = await axios.get(URL);
  return response;
};
