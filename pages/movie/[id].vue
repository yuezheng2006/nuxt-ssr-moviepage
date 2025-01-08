<template>
  <div v-if="loading" class="text-white text-center">加载中...</div>
  <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
  <div v-else-if="movie" class="text-white">
    <div class="flex flex-col md:flex-row gap-8">
      <img 
        :src="movie.poster" 
        :alt="movie.title"
        class="w-full md:w-96 rounded-lg shadow-lg"
      >
      <div class="flex-1">
        <h1 class="text-3xl font-bold mb-4">{{ movie.title }}</h1>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-yellow-400 text-xl">⭐ {{ movie.rating }}</span>
            <span class="text-gray-400">{{ movie.year }}</span>
          </div>
          <p class="text-gray-300">{{ movie.overview }}</p>
          <div class="space-y-2">
            <p><span class="text-gray-400">原标题：</span>{{ movie.original_title }}</p>
            <p><span class="text-gray-400">片长：</span>{{ movie.runtime }}分钟</p>
            <p><span class="text-gray-400">语言：</span>{{ movie.original_language }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-white text-center">未找到电影信息</div>
</template>

<script setup>
const route = useRoute();
const movieId = route.params.id;

const loading = ref(false);
const error = ref(null);
const movie = ref(null);

const TMDB_API_KEY = 'f62f750b70a8ef11dad44670cfb6aa57';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

async function fetchMovieDetail() {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=zh-CN`
    );
    if (!response.ok) {
      throw new Error('电影信息获取失败');
    }
    const data = await response.json();
    
    movie.value = {
      id: data.id,
      title: data.title,
      original_title: data.original_title,
      overview: data.overview,
      poster: data.poster_path ? `${IMAGE_BASE}${data.poster_path}` : 'https://via.placeholder.com/300x450',
      rating: data.vote_average,
      year: new Date(data.release_date).getFullYear(),
      runtime: data.runtime,
      original_language: data.original_language
    };
  } catch (err) {
    error.value = '加载失败，请稍后重试';
    movie.value = null;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchMovieDetail();
});
</script>