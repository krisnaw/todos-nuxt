// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/devtools', '@nuxt/ui', '@nuxthub/core'],
  css: ['animate.css'],
  hub: {
    database: true
  }
})