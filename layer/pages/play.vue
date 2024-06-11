<script setup>
const myui = {
  background: 'bg-gray-50 dark:bg-gray-800/50',
  ring: 'ring-1 ring-gray-300 dark:ring-gray-700',
  divide: 'divide-y divide-gray-300 dark:divide-gray-700',
  header: { base: 'font-bold' }
};

/*
body {
  @apply antialiased font-sans
  text-gray-700 dark:text-gray-200
  bg-white dark:bg-gray-900
  ;
}
*/

</script>


<template lang="pug">
UCard(class="flex-1" :ui="myui")
  template(#header)
    | Welcome to the playground!

  p(class="text-gray-500 dark:text-gray-400")
    | Try your components here!
    br
    | Does this work?

</template>
