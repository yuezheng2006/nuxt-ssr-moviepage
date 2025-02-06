<template>
  <NuxtLink :to="`/singer/${singer.singerid}`" class="block">
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img :src="singer.singerheader" :alt="singer.singername" class="w-full h-[450px] object-cover">
      <div class="p-4">
        <h2 class="text-xl font-semibold text-white mb-2">{{ singer.singername }}</h2>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  singer: {
    type: Object,
    required: true
  }
});
</script>