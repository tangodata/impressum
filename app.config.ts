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
  testmenu: [
    {groupname: 'Top', items: [
      {name: 'Home', link: '/'},
      {name: 'About', link: '/about'},
      {name: 'Demo', link: '/demo'},
      {name: 'News', link: '/news'},
      {name: '(dmoz)', link: '/m/tp/dmoz'},
      {name: 'Guide', link: '/guide'},
    ]},

    {groupname: 'Tests', items: [
      {name: '1', link: '/test/markdown'},
      {name: '2', link: '/test/blockquote'},
      {name: '3', link: '/test/tufte'},
      {name: '4', link: '/test/math'},
      {name: '5', link: '/test/mermaid'},
      {name: 'P', link: '/about/legal/privacy'},
      {name: 'T', link: '/about/legal/terms'},
    ]},


    {groupname: '@Creators/channels', items: [
      {name: 'Tintimo (Watch)', link: '/m/ti'},
      {name: 'A-artistes', link: '/r/aa'},
      {name: 'A-spaces(showtime)', link: '/r/ax'},
      {name: 'Tnews (Read-discuss)', link: '/m/tn'},
      {name: 'A-radio-tv', link: '/r/ar'},
    ]},


    {groupname: '@Events/@Ecommerce', items: [
      {name: 'Tfinder (Dance-where)', link: '/m/tf'},
      {name: 'A-tours', link: '/r/at'},
      {name: 'Tlicious (Fashion)', link: '/m/tl'},
      {name: 'A-moda', link: '/r/am'},
      {name: 'A-spaces(commerce)', link: '/r/ax'},
    ]},


    {groupname: '@Training/@Members', items: [
      {name: 'Tdance (Dance-how,Body)', link: '/m/td'},
      {name: 'A-spaces(gym)', link: '/r/ax'},
      {name: 'AClub', link: '/m/ac'},
    ]},

    {groupname: 'Academy', items: [
      {name: 'Torg', link: '/m/to'},
      {name: 'Tpedia (Read-articles)', link: '/m/tp'},
      {name: '(lexicons)', link: '/m/tp/lexicons'},
      {name: 'Tmusic (Listen)', link: '/m/tm'},
      {name: 'A-publish', link: '/r/ap'},
    ]},

    {groupname: 'Future', items: [
      {name: 'Teast', link: '/m/te'},
      {name: 'Tnet', link: '/m/tx'},
      {name: 'A-lab', link: '/r/al'},
      {name: 'A-digital', link: '/r/ad'},
      {name: '(appstore)', link: '/m/tx'},
    ]},
  ],

})
