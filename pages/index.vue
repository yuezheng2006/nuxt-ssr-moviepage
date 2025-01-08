<template>
  <div>
    <h1 class="text-3xl font-bold text-white mb-8">热门电影</h1>
    <div v-if="pending" class="text-white text-center">加载中...</div>
    <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
const { pending, error, data: movies } = await useFetch('/api/movies', {
  transform: (response) => {
    return response.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x450',
      rating: movie.vote_average,
      year: new Date(movie.release_date).getFullYear()
    }));
  }
});
</script>