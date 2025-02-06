<template>
  <div>
    <h1 class="text-3xl font-bold text-white mb-8">歌手列表</h1>
    <div v-if="pending" class="text-white text-center">加载中...</div>
    <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <SingerCard
        v-for="singer in singers"
        :key="singer.id"
        :singer="singer"
      />
    </div>
  </div>
</template>

<script setup>
const { pending, error, data: singers } = await useFetch('/api/singers', {
  transform: (response) => {
    return response.data.singer_data.map(singer => ({
      singerid: singer.singerid,
      singername: singer.singername,
      singerheader: singer.singerheader,
    }));
  }
});
</script>