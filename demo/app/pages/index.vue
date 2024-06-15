<template lang="pug">
div
  .bg-lime-100
    | Front Page

  .prose.p-2
    ContentDoc(path="welcomepage")

  .bg-lime-100
    | This page is Vue template plus a ContentDoc
  NuxtLink(to="/test") Go to Test

</template>

<script setup>
const route = useRoute()
</script>
