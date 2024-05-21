<script setup>
const props = defineProps({
  skin:{
    type: String,
    default: '',
  },
  fmt:{
    type: String,
    default: '',
  },
  hassidebar: {
    type: Boolean,
    default: false,
  },
})
//import { inject } from 'vue'
//const subsite = inject('subsite', ref('') )

const { testmenu: menu } = useAppConfig()
</script>

<template lang="pug">
main
  slot(name="header" :skin="skin" :fmt="fmt")
    p.sample [{{ skin }}] HEADER (fmt={{ fmt }})

  slot(name="subheader")
    //p.sample SUBHEADER
    template(v-for="j in menu")
      p
        b {{ j.groupname }}:&nbsp;
        template(v-for="i in j.items")
          NuxtLink(:to="i.link") {{i.name}}
          | &nbsp;|&nbsp;
    //-p END OF MENU
    //-pre {{  menu }}

  slot(name="sidebar" :hassidebar="hassidebar")
    p.sample SIDEBAR (hassidebar={{ hassidebar }})

  slot(name="default")
    p MAIN SLOT

  slot(name="footer")
    p.sample FOOTER in {{ skin }}

</template>

<style lang="scss">
.sample {
  @apply text-center border border-dotted
    bg-slate-100 text-red-400 text-xs italic;
}
</style>
