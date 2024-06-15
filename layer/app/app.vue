<template lang="pug">
div
  NuxtLoadingIndicator

  AppMain
    NuxtLayout
      NuxtPage

  //-ClientOnly
  //-  LazyUContentSearch(:files="files" :navigation="navigation")
  //-UNotifications
</template>

<script setup>
// Simple Head metadata
useHead({
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})

// SEO metadata
const { seo } = useAppConfig()
useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: '', //seo?.socialCard 'https://www.tangueros.org/social-carsd.png',
  twitterImage: '', //seo?.socialCard
  twitterCard: 'summary_large_image',
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
*/
</script>

