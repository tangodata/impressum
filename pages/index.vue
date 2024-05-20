<script setup>
definePageMeta({layout: 'default'})
</script>

<template lang="pug">
NuxtLayout



  .p-4
    .max-w-sm.rounded.overflow-hidden.shadow-lg.mb-4
      img.w-full(
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains")
      .px-6.py-4.pb-2
        .font-bold.text-xl.mb-2
          | The Coldest Sunset
        p.text-gray-700.text-base
          | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          | quia, nulla! Maiores et perferendis eaque, execitationem praesentium
          | nihil.
        NuxtLink.font-bold(
          to="/news"
          class="hover:underline text-[#38bdf8]"
        ) Go to /news page!
        p
        NuxtLink(to="/m/tp/keysites") KeySites

      .px-6.py-4
        span.badge.mr-2 #photography
        span.badge.mr-2 #travel
        span.badge #winter
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
