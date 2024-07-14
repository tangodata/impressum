<template lang="pug">
VCard
  p Try your components here!
  p Wait there's more

  template(v-slot:header)
    p Card Other Header
  template(v-slot:footer)
    p Card Other Footer
</template>

<script setup>
const x=false
/*
  template(#header)
    p Card Header
  template(#footer)
    p Card Footer
const myui = {
  background: 'bg-gray-50 dark:bg-gray-800/50',
  ring: 'ring-1 ring-gray-300 dark:ring-gray-700',
  divide: 'divide-y divide-gray-300 dark:divide-gray-700',
  header: { base: 'font-bold' }
};

body {
  @apply antialiased font-sans
  text-gray-700 dark:text-gray-200
  bg-white dark:bg-gray-900
  ;
}
UCard(class="flex-1" :ui="myui")
  template(#header)
    | Welcome to the playground!

  p(class="text-gray-500 dark:text-gray-400")
    | Try your components here!
    br
    | Does this work?

*/

</script>


