<script setup>
// guide/[...slug] has
// breadcrumb and sidebar

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
NuxtLayout()
  //:skin="data.skin")
  header
    .text-sm.breadcrumbs
      ul
        li
          router-link(to="/guide") Guide
        li
          | This Page

  article.guide: div
    ContentDoc

      template(#not-found)
        h1 {{route.path}} file is Not Found
        hr
        a(href="/") Back to Home

      template(#empty)
        h1 {{route.path}} is empty
        hr
        p Do you want to help to write some content?
        a(href="/") Back to Home

  //ContentRenderer(:value="data")
    h1 {{ data.title }}
    h2 skin is {{ data.skin || "None" }}
    hr
    ContentRendererMarkdown(:value="data")
</template>

<style lang="scss">
article.guide {
  @apply  bg-lime-100  mx-0 px-4 w-full;

  >div {
    @apply  bg-white  mx-0 px-0 border;
  }

}

.flexbox {
  @apply flex flex-wrap w-full

  ;
}
.flexcol {
  @apply flex-none
  w-1/2 sm:w-1/3 lg:w-1/4
  ;
}

</style>



