<script setup>
//Doc Layout = left & right sidebar,
//wrapped inside a UContainer

/*
*/
</script>

<template lang="pug">
UContainer
  UPage
    slot
    template(#left)
      p Left Book Index
    template(#right)
      p Right TOC
</template>
