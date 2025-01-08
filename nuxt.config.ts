// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  routeRules: {
    '/': { ssr: true },  // 首页使用SSR
    '/**': { ssr: false }  // 其他路由使用CSR
  }
})