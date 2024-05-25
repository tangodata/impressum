// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    //'@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
  ],

  ui: {
    //prefix: 'u',
    global: true,
    icons: ['heroicons', 'simple-icons', 'logos',],
  },

  components: [
    {
      path: '~/compo_ui',
      global: true,
      prefix: 'U',
      pathPrefix: false,
    },

  ],

  devtools: {enabled: true},

})
