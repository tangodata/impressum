<template lang="pug">
div.prose.bg-lime-100
  div.bg-slate-200.border
    b: i Using a ContentDoc fetch to [{{ route.fullPath }}]

  div.m-2.bg-white
    ContentDoc

  i: NuxtLink(to="/") Go Home
</template>

<script setup>
const route = useRoute()
</script>


