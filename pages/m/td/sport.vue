<script setup>
//import sportdata from "~/content_ext/diary/sport2024.yaml"

const {data} = await useAsyncData('get-sport', () =>
  queryContent('/impdb/diary/sport2024').findOne()
)
//ContentRenderer :value="data"

//useAsyncData(  ()=>queryContent
//useFetch( '/api/module', query: {}
//useHead
//useRoute
//useRouter    .back() push() navigateTo
//useAppConfig
//useRuntimeConfig
//useSeoMeta
//useServerSeoMeta
//useState
//definePageMeta ( {layout: key: keepalive  redirect })
//navigateTo
//setPageLayout
//import.meta.url


</script>

<template lang="pug">
NuxtLayout
  div.prose
    h1 Sport Schedule for Season {{  data.season  }}

    //pre {{  data  }}
    ul
      li(v-for="i in data.fixtures")
        | (\#{{  i.weeknum }})
        b {{  i.city }}
        | -- {{ i.dates }}&nbsp;
        i {{ i.name }}


</template>
