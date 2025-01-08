const TMDB_API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57';
const BASE_URL = 'https://api.themoviedb.org/3';

export default defineEventHandler(async (event) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=zh-CN&page=1`
  );
  return response.json();
});