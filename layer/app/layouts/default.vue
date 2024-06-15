<script setup>
//simple Layout
const myui="border border-red-300 my-1"
</script>

<template lang="pug">
article(:class="myui")
  slot
</template>
