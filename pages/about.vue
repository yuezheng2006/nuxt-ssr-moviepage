<template>
  <div class="max-w-3xl mx-auto text-white">
    <h1 class="text-3xl font-bold mb-6">关于本演示站点</h1>
    <div class="space-y-4">
      <p>欢迎来到歌手天地，这是一个基于Nuxt3构建的现代化歌手展示网站。我们采用了混合渲染策略，首页使用服务器端渲染（SSR）提供更好的首屏加载体验和SEO优化，而歌手详情页面则采用客户端渲染（CSR）实现更流畅的用户交互。</p>
      <div class="bg-gray-800 p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-3">网站特色</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>服务器端渲染的歌手列表展示</li>
          <li>客户端渲染的歌手详情页面</li>
          <li>响应式网格布局设计</li>
          <li>流畅的页面过渡效果</li>
        </ul>
      </div>
      <p class="text-sm text-gray-400 mt-8">基于Nuxt3 + Vue3开发</p>
    </div>
  </div>
</template>

<script setup>
// 客户端渲染，无需特殊设置
</script>