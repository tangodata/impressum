<script setup>
const { seo } = useAppConfig()

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {lang: 'en'},
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

import { provide } from 'vue'
provide('subsite', 'All')

//-----------------------------
// get navigation + files
/*
const { data: navigation } = await useAsyncData(
  'navigation', () => fetchContentNavigation()
)

const { data: files } = useLazyFetch('/api/search.json', {
  default: () => [],
  server: false
})

provide('navigation', navigation)
*/
</script>

<template lang="pug">
div
  NuxtLoadingIndicator

  //-AppHeader
  //-UMain
  main
    NuxtLayout
      NuxtPage
  //-AppFooter

  //-ClientOnly
    //- LazyUContentSearch files navigation

  //-UNotifications
</template>

