<template>
  <div class="min-h-screen bg-gray-900">
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-white">电影天地</NuxtLink>
        <div class="space-x-4">
          <NuxtLink to="/" class="text-white hover:text-gray-300">首页</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-gray-300">关于</NuxtLink>
        </div>
      </div>
    </nav>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>