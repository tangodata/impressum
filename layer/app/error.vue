<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
})

// Simple Head metadata
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: { lang: 'en' },
})

// SEO metadata
useSeoMeta({
  title: 'Page Not Found',
  description: 'We are sorry but this page could not be found',
})

/*
// Fetch the list of all document titles
const { data: files } = useLazyFetch('/api/search.json', {
  default: () => [],
  server: false
})

// Fetch the navigation to prev and next
const { data: navigation } = await useAsyncData(
  'navigation', () => fetchContentNavigation()
)
provide('navigation', navigation)



  AppHeader
  UMain
    UContainer
      UPage
        UPageError(:error="error")
  AppFooter

*/
</script>

<template lang="pug">
div
  AppHeader
  UMain
    UContainer
      pre {{error}}
  AppFooter

  //-ClientOnly
  //-  LazyUContentSearch(:files="files" :navigation="navigation")
  //-UNotifications
</template>

