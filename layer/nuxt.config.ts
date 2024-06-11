//tt/ttui
export default defineNuxtConfig({
  devtools: {enabled: false},

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

    //'@nuxt/content',
  
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  components: [
    {
      path: 'compo_ui',
      global: true,
      prefix: 'U',
      pathPrefix: false,
    },
  ],

  ui: {
    global: true,
    icons: [
      'heroicons',
      'simple-icons',
      'logos',
    ],
  },

})
