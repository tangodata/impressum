<template lang="pug">
frame(fmt="default" :skin="skin")
  slot

  //template(#sidebar)
  //  p you are in default

  //template(#footer)
  //  SiteFooter
  //template(#header)
  //  SiteHeader
</template>

<script setup>
import frame from "./chrome/frame.vue"
const props = defineProps(['skin'])

/*
import { inject } from 'vue'
const skin = inject('subsite')
const skin = 'AC'
const props = defineProps({
  skin:{
    type: String,
    default: '',
  },
  hassidebar: {
    type: Boolean,
    default: false,
  },
})
*/
</script>
