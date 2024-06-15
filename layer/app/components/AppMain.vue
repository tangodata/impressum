<template lang="pug">
main
  AppHeader
  UContainer(as="div" :class="uimain")
    NuxtLayout
      NuxtPage
  AppFooter
</template>

<script setup>
const uimain = 'min-h-[80vh] '
//'min-h[calc(100vh-var(--header-height))] '
</script>

