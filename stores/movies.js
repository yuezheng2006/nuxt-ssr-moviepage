import { defineStore } from 'pinia';

const TMDB_API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57';  // Free public API key for demo
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export const useMovieStore = defineStore('movies', {
  state: () => ({
    movies: [],
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchMovies() {
      this.loading = true;
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=zh-CN&page=1`
        );
        const data = await response.json();
        
        this.movies = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          poster: movie.poster_path ? `${IMAGE_BASE}${movie.poster_path}` : 'https://via.placeholder.com/300x450',
          rating: movie.vote_average,
          year: new Date(movie.release_date).getFullYear()
        }));
      } catch (err) {
        this.error = '加载失败，请稍后重试';
      } finally {
        this.loading = false;
      }
    }
  }
});