import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  alias: { '#base': resolve('./') },

  devtools: {enabled: false},

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    //'@nuxt/content',
  ],

  ui: {
    global: true,
    icons: [
      'heroicons',
      'simple-icons',
      'logos',
    ],
  },

  css: [
    '#base/app/assets/css/main.css',
  ],

  components: [
    {
      path: '#base/app/compo_ui', pathPrefix: false, prefix: 'U',
      //global: true,
    },
    {
      path: '#base/app/components', pathPrefix: false,
    },
  ],

})
