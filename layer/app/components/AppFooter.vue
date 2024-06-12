<script setup>
const { footer } = useAppConfig()

const ui = {
  bottom: {
    wrapper: "border-t border-gray-200 dark:border-gray-800",
    container: "!py-6",
  },
  top: {
    wrapper: "border-t border-gray-200 dark:border-gray-800",
    container: "py-8 lg:py-12",
  },
}
</script>

<template lang="pug">
UFooter(:ui="ui")
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
