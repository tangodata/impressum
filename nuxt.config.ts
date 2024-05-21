// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'
const isDev = process.env.NODE_ENV === 'development'

//const apiBaseUrl = 'https://tangueros.net'
const apiBaseUrl = 'http://localhost:3000'


//===========================================================

//remark plugin for wikilinks
// [[wikis]] [[wikis : alias]] substitution
// remark-wiki-link npm
const wikilink = {
  //pageResolver(p) {return ['hello']} ,
    //{
    //console.log('Called pageResolver with ',p)
    //return 'good'
    //pageResolver: //(p)=>['notess'],
    //return [p.replace(/ /g, '_').toUpperCase()]
  //},
  //hrefTemplate: function(p) {
    //return p
    //return `/wikipage/${p}`
  //},
  hrefTemplate(p) {console.log('hrefTemplate'); return '/lost'} ,
  wikiLinkClassName: 'wikilink',
  newClassName: 'wikinew',
};

//===========================================================


export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/content",

    "@nuxt/ui",
    //ui adds these automagically
    //"@nuxtjs/tailwindcss", +  forms, typography,
    //"@nuxtjs/color-mode",
    //"nuxt-icon"

    "@nuxt/fonts",
    "@nuxt/image",
    //"@nuxthq/studio",

    //"nuxt-og-image",
    //'@nuxtjs/i18n',
  ],
  runtimeConfig: {
    public: {apiBaseUrl, },
  },

  tailwindcss: {
    exposeConfig: true,
    //viewer: true,
  },
  colorMode: {
  },

  content: {
    //documentDriven: true,
    //  navigation: true, page: true, surround:true,
    //  globals.theme.where _id: content:_theme.yml
    //layoutFallbacks: ['theme'], injectPage:true,

    //api: {}, /api/_content/
    //ignores: ['\\.bak$']
    //respectPathCase: true,
    //locales:
    //defaultLocale:

    //----------------------------------------
    //multiple sources

    markdown: {
      //anchorLinks: {}
      //mdc:
      remarkPlugins: {
        'remark-wiki-link': wikilink,

      },
      rehypePlugins: [
      ],
      //toc:
      //tags:
      //highlight: {}

    },

  },

  // hooks: - extend ui components to md
  // ui
  routeRules: {
    ///api/search.json prerender true
    //'/api/'
  },
  colorMode: {preference: 'dark',},


})
