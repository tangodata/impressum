<script setup>
import { provide, ref } from 'vue'
//definePageMeta({layout: 'page'})

//const route = useRoute()
//const {data} = await useFetch(route.path)
//const {data} = await useAsyncData(() => queryContent(route.path).findOne())

//const subsite = ref('')
//provide('subsite', subsite)
//subsite.value = data.skin


//NuxtLayout(:skin="skin")
//const {page} = useContent()
const route = useRoute()
//const {data} = await
//   useAsyncData('get-document', () =>
//     queryContent(route.path).findOne()
//   )
//ContentRenderer :value="data"


/*
const {data} = await useAsyncData(
  () => queryContent(route.path).findOne()
)

definePageMeta({
  layout: 'docs'
})

import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const { toc, seo } = useAppConfig()

const { data: page } = await useAsyncData(
  route.path,
  () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({
    statusCode: 404, statusMessage: 'Page not found', fatal: true
})}

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})

const headline = computed(() => findPageHeadline(page.value))

const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `${toc.bottom.edit}/${page?.value?._file}`,
  target: '_blank'
}, ...(toc?.bottom?.links || [])].filter(Boolean))
*/

</script>


<template lang="pug">
article.prose
  ContentDoc
    template(#not-found)
      h1 Content at {{route.path}} Not Found
      p
      a(href="/") Back to Home

    template(#empty)
      h1 Content at {{route.path}} is Empty
      p
      a(href="/") Back to Home


//--ContentRenderer(:value="data")
  h1 {{ data.title }}
  h2 skin is {{ data.skin || "None" }}
  hr
  ContentRendererMarkdown(:value="data")

</template>

<style lang="scss">
xarticle {
  @apply  bg-white mx-0 px-4;
}
xarticle div {
  @apply  prose w-full mx-0 px-0
  ;
}
</style>
