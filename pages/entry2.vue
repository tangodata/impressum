<template lang="pug">
h1 Welcome to Tangueros Space
figure.callout
  router-link(to="/sites") Go to Sites Mapper

hr
.itemsection
  .items
    .item
      router-link(to="/ac") Club
    .item
      router-link(to="/tn") News
    .item
      router-link(to="/ti") Arts
    .item
      router-link(to="/tf") Finder

</template>

<style lang="scss">
.itemsection {
  @apply mx-3
  text-xs md:text-sm
  ;
}
.items {
  @apply flex flex-wrap text-slate-500;
}
.items a {
  @apply bg-blue-200 underline;
}
.item {
  @apply
  flex-none w-1/4
  p-2 rounded-md border
  justify-center overflow-hidden
  ;
}
</style>
