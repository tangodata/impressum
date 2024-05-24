export default defineAppConfig({

  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },

  seo: {
    siteName: 'TangoPedia Dictionary'
  },

  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/tangueros/tnext',
      'target': '_blank',
      'aria-label': 'Docs template on GitHub'
    }]
  },

  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://nuxt.com',
      'target': '_blank',
      'aria-label': 'Nuxt Website'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.com/invite/ps2h6QT',
      'target': '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/nuxt_js',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  },

  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank'
      }]
    }
  },

  //SiteHeader
  // menu to appear in header and side drawer
  headmenu: [
    { name: 'Home', link: '#', },
    { name: 'Pages',
      submenu: [
        { name: 'Homepage',link: '#',
          submenu: [
            { name: 'Homepage1', link: '#', },
            { name: 'Homepage2', link: '#', },
          ],
        },
        { name: 'Pages',link: '#',
          submenu: [
            { name: '404', link: '#', },
            { name: 'Author', link: '#', },
            { name: 'Category', link: '#', },
            { name: 'Search', link: '#', },
            { name: 'Page', link: '#', },
            { name: 'Contact', link: '#', },
          ],
        },
        { name: 'Post',link: '#',
          submenu: [
            { name: 'Post Default', link: '#', },
            { name: 'Post Fullwidth', link: '#', },
          ],
        },
        { name: 'Documentation',link: '#',
          submenu: [
            { name: 'Get Started', link: '/docs/',},
            { name: 'Components', link: '/docs/components',},
            { name: 'Credits', link: '/docs/credits',},
            { name: 'Change Log', link: '/docs/changelog',},
          ],
        },
      ],
    },
    { name: 'Sport', link: '#', },
    { name: 'Travel', link: '#', },
    { name: 'Techno', link: '#', },
    { name: 'Worklife', link: '#', },
    { name: 'Future', link: '#', },
    { name: 'More', link: '#', },
  ],

  //SiteFooter
  // menu to appear in footer
  footmenu: [
    { groupname: 'Product', items: [
        { name: "Landing", link: "#", },
        { name: "Pages", link: "#", },
        { name: "Sections", link: "#", },
        { name: "Sign Up", link: "#", },
        { name: "Login", link: "#", },
      ],
    },
    { groupname: 'Support', items: [
        { name: "Documentation", link: "#", },
        { name: "ChangeLog", link: "#", },
        { name: "Tools", link: "#", },
        { name: "Icons", link: "#", },
      ],
    },
    { groupname: 'Includes', items: [
        { name: "Utilities", link: "#", },
        { name: "Components", link: "#", },
        { name: "Example", link: "#", },
        { name: "Updates", link: "#", },
      ],
    },
    { groupname: 'Legal', items: [
        { name: "Privacy Policy", link: "#", },
        { name: "Terms of Use", link: "#", },
        { name: "License", link: "#", },
        { name: "GDPR", link: "#", },
      ],
    },
  ],

  //test menus
  testmenu: ()=>[
/*
    {groupname: 'Next', items: [
      {name: 'east', link: '/east'},
      {name: 'south', link: '/south'},
      {name: 'west', link: '/west'},
      {name: 'north', link: '/north'},
    ]},
*/
    {groupname: 'Menu', items: [
      {name: 'Home', link: '/'},
      {name: '111', link: '/test/1'},
      {name: '222', link: '/test/2'},
      {name: '333', link: '/test/3'},
      {name: '444', link: '/test/4'},
      {name: '555', link: '/test/5'},
      //{name: 'lost', link: '/lost'},
      //{name: 'about', link: '/about'},
    ]},
  ],

  myname: ()=>['Mary'],
})
