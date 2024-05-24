export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  devtools: { enabled: false },
  extends: [
    '../', // the parent theme
  ],
  modules: [
  ],
  app: {
    //NUXT_APP_BASE_URL
    baseURL: "/impressum/",
  },

})
