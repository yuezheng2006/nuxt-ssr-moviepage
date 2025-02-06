<template>
  <div v-if="loading" class="text-white text-center">加载中...</div>
  <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
  <div v-else-if="singer" class="text-white max-w-7xl mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-12">
      <div class="md:w-1/3">
        <img 
          :src="singer.singerheader" 
          :alt="singer.singername"
          class="w-full rounded-lg shadow-lg object-cover aspect-square"
        >
      </div>
      <div class="flex-1 space-y-6">
        <div class="space-y-4">
          <h1 class="text-4xl font-bold">{{ singer.singername }}</h1>
          <div class="flex items-center">
            <span class="text-yellow-400 text-xl font-semibold">⭐ 热门歌手</span>
          </div>
          <p class="text-gray-300 text-lg leading-relaxed">{{ singer.description }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="space-y-3">
              <p class="flex items-center gap-2">
                <span class="text-gray-400 min-w-[5rem]">歌手ID</span>
                <span class="text-gray-300">{{ singer.singerid }}</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="text-gray-400 min-w-[5rem]">英文名</span>
                <span class="text-gray-300">{{ singer.english_name }}</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="text-gray-400 min-w-[5rem]">出生日期</span>
                <span class="text-gray-300">{{ singer.birth_date }}</span>
              </p>
              <p class="flex items-center gap-2">
                <span class="text-gray-400 min-w-[5rem]">出生地</span>
                <span class="text-gray-300">{{ singer.birthplace }}</span>
              </p>
              
              <p class="flex items-center gap-2">
                <span class="text-gray-400 min-w-[5rem]">歌手百科</span>
                <a  class="text-gray-300" :href="singer.wiki_url">wiki 🔗</a>
              </p>
            </div>

            <div>
              <h3 class="text-gray-400 font-semibold mb-3">主要荣誉</h3>
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(award, index) in singer.awards" :key="index" class="text-gray-300">
                  {{ award }}
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <h3 class="text-gray-400 font-semibold mb-3">代表作品</h3>
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(work, index) in singer.representative_works" :key="index" class="text-gray-300">
                  {{ work }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-white text-center">未找到歌手信息</div>
</template>

<script setup>
const route = useRoute();
const singerId = route.params.id;

const loading = ref(false);
const error = ref(null);
const singer = ref(null);

async function fetchSingerDetail() {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch('/api/singerDetail');
    if (!response.ok) {
      throw new Error('歌手信息获取失败');
    }
    const data = await response.json();
    
    // 从返回的数据中找到匹配的歌手
    const matchedSinger = data.data.singer_data.find(s => s.singerid.toString() === singerId);
    
    if (matchedSinger) {
      singer.value = matchedSinger;
    } else {
      throw new Error('未找到该歌手');
    }
  } catch (err) {
    error.value = err.message || '加载失败，请稍后重试';
    singer.value = null;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchSingerDetail();
});
</script>