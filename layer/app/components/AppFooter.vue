<template lang="pug">
UFooter(:ui="uifooter")
  template(#top)
    b BASE THEME FOOTER
  template(#left)
    | {{ footer?.credits }}
  template(#right)
    // UColorModeButton(v-if="footer?.colorMode")
    template(v-if="footer?.links")
      UButton(v-for="(link, index) of footer?.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      )
</template>

<script setup>
const uifooter = {
  wrapper: 'bg-teal-400',
  top: {
    wrapper: "border-t border-gray-200 dark:border-gray-800",
    container: "py-4 lg:py-6",
  },
  bottom: {
    wrapper: "text-sm border-0 border-gray-200 dark:border-gray-800",
    container: "!py-3",
  },
}

const { impressum } = useAppConfig()
const footer = impressum.footer
/*
*/
</script>

