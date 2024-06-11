export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
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
