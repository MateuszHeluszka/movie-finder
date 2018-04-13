import { API_URL, API_KEY } from '../config';

export const getMovie = id =>
  fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .catch(error => error.json());

export const findMovies = query =>
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(res => res.json())
    .catch(error => error.json());
