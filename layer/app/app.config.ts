export default defineAppConfig({
  seo: {
    siteName: 'Impressum Theme as Nuxt Layer',
    socialCard: 'https://tangueros.org/social-card.png',
  },

//////////////////////////////////////////////
// used by @nuxt/ui components
// and compo_ui components
// define only CSS and Tailwind
/////////////////////////////////////////////

  ui: {
    primary: 'green',
    gray: 'cool',

    variables: {
      header: {
        height: '4rem'
      },
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: 'var(--color-gray-200)'
      },
    },

    icons: {
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
      system: 'i-heroicons-computer-desktop-20-solid',
      search: 'i-heroicons-magnifying-glass-20-solid',
      external: 'i-heroicons-arrow-up-right-20-solid',
      chevron: 'i-heroicons-chevron-down-20-solid',
      hash: 'i-heroicons-hashtag-20-solid',
      menu: 'i-heroicons-bars-3-20-solid',
      close: 'i-heroicons-x-mark-20-solid',
      check: 'i-heroicons-check-circle-20-solid'
    },

    presets: {
      button: {
        primary: {
          color: 'white',
          variant: 'solid'
        },
        secondary: {
          color: 'gray',
          variant: 'ghost'
        },
        input: {
          color: 'white',
          variant: 'outline',
          ui: {
            font: '',
            color: {
              white: {
                outline: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
              }
            }
          }
        },

      }
    },

    //////////////////////////////////////////////
    // used by ui-pro and compo_ui components
    //////////////////////////////////////////////

    aside: {},
    auth: {},
    blog: {},
    landing: {},
    navigation: {},
    page: {},
    main: {},
    header: {},
    footer: {
      top: {
        wrapper: "border-t border-gray-200 dark:border-gray-800",
        container: "py-4 lg:py-6",
      },

      bottom: {
        wrapper: "text-sm border-0 border-gray-200 dark:border-gray-800",
        container: "!py-3",
      },
    },


  },

//////////////////////////////////////////////
// used by impressum's theme engine
// app.vue, layouts/default.vue
// components/AppHeader AppFooter
// and pages/*.vue
//////////////////////////////////////////////

  impressum: {

    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: "i-simple-icons-github",
        to: "https://github.com/tangueros/portal",
        target: "_blank",
        'aria-label': "On Github",
      },{
        icon: "i-simple-icons-facebook",
        to: "https://facebook.com/tangoeast",
        target: "_blank",
        'aria-label': "On Facebook",
      }],
      colorMode: false,
    },

    header: {
      title: 'Impressum Theme',
      logo: {},
      colorMode: true,
      search: true,

      // UButton bindings, to, target, aria-label, icon, label
      links: [
        {label: 'Home', to: '/',},
        //{label: 'About', to: '/about',},
        //{label: 'Card', to: '/card',},
        //{name: 'Test', to: '/test',},
      ],
    },
  /*      {
          icon: "i-simple-icons-github",
          to: "https://github.com/nuxt-ui-pro/docs",
          target: "_blank",
          'aria-label': "Docs template on GitHub"
        }, */

    toc: {
    },

  }

})
