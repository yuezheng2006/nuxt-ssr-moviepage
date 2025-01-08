<template>
  <NuxtLink :to="`/movie/${movie.id}`" class="block">
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img :src="movie.poster" :alt="movie.title" class="w-full h-[450px] object-cover">
      <div class="p-4">
        <h2 class="text-xl font-semibold text-white mb-2">{{ movie.title }}</h2>
        <div class="flex justify-between items-center">
          <span class="text-yellow-400">⭐ {{ movie.rating }}</span>
          <span class="text-gray-400">{{ movie.year }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
});
</script>