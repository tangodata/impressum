<script setup>
const {toplinks} = useAppConfig()
</script>

<template lang="pug">
main(class="bg-white pa-2")
  header(class="bg-slate-800 text-white")
    nav.flex
      .title.flex.px-4
        b HEADER
      ul(class="flex text-xs")
        li(v-for="item in toplinks"
          class="flex px-2 border")
          NuxtLink(:to="item.link") {{ item.name }}

  hr
  UMain
    UContainer(
      ssclass="min-h-screen flex items-start")
      slot
  hr
  //-pre toplinks {{ toplinks  }}
  hr
  UFooter(:links="toplinks")
    template(#top)
      b BASE THEME FOOTER
    template(#left)
      span Copyright
    template(#right)
      span FB TW
</template>
