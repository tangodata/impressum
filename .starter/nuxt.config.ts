export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  extends: [
    '../layer', // the parent theme
    //'@kaceo/impressum', // the parent theme
  ],
  modules: [
    '@nuxt/content',
  ],
  app: {
    //NUXT_APP_BASE_URL
    baseURL: "/impressum/",
  },

})
