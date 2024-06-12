<script setup>
const { header } = useAppConfig()
const navigation = inject('navigation', [])
/*
header(class="bg-black text-white")
  nav.flex
    .title.flex.px-4
      b HEADER
    ul(class="flex text-xs")
      li(v-for="item in toplinks"
        class="flex px-2 border")
        NuxtLink(:to="item.link") {{ item.name }}

  nav.flex
    template v-if="header?.links">
      UButton(
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      )

UHeader
  //-template(#logo)
    template(v-if="header?.logo?.dark || header?.logo?.light")
      //-UColorModeImage(v-bind="{ class: 'h-6 w-auto', ...header?.logo }" )
    template(v-else)
      | Impressum
    //-UContentSearchButton(class="hidden lg:flex")

  template(#right)
    //-UContentSearchButton(v-if="header?.search"
    //-  :label="null" class="lg:hidden")
    //-UColorModeButton(v-if="header?.colorMode")
    template v-if="header?.links">
      UButton(
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      )

  template(#panel)
    //-UNavigationTree(:links="mapContentNavigation(navigation)")

  template(#right)
    span Links:
    template v-if="header?.links">
      UButton(
        v-for="(link, index) of header.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }")

*/
</script>

<template lang="pug">
UHeader
  template(#logo)
    | {{ header.title }}
  template(#center) ???
  //  | More Center
  template(#right) !!!
  //  | More Right
  template(#bottom)
    UContainer(class="bg-lime-100")
      ul(class="flex text-xs")
        li(v-for="(item,index) in header.links"
          :key="index"
          class="flex px-2 border")
          NuxtLink(:to="item.to") {{ item.label }}
</template>
