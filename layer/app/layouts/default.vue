<script setup>
const {toplinks} = useAppConfig()
</script>

<template lang="pug">
main(class="bg-white pa-2")

UMain
  UContainer(
    ssclass="min-h-screen flex items-start")
    slot
</template>
