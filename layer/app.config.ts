export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool',

    footer: {
      links: [
        {label: 'home', click: '/',},
        //{label: 'about', click: '/about',},
      ],
    },

  },

  toplinks: [
    {name: 'Home', link: '/',},
    {name: 'Play', link: '/play',},
    //{name: 'About', link: '/about',},
    //{name: 'Test', link: '/test',},
  ],
})
