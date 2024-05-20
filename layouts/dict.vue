<template lang="pug">
frame(fmt="dict")
  slot

  //template(#sidebar)
  //  p you are in default
</template>

<script setup>
import frame from "./chrome/frame.vue"
//import { inject } from 'vue'
//const skin = inject('subsite')
</script>
