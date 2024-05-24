<template lang="pug">
footer(:class="ui.wrapper" v-bind="attrs")

  div(v-if="$slots.top" :class="ui.top.wrapper")
    UContainer(:class="ui.top.container")
      slot(name="top")

  div(:class="ui.bottom.wrapper")
    UContainer(:class="ui.bottom.container")
      div(:class="ui.bottom.right")
        slot(name="right")
      div(:class="ui.bottom.center")
        slot(name="center")
          UFooterLinks(:links="links")
      div(:class="ui.bottom.left")
        slot(name="left")
</template>

<script setup>''
const config = {
  wrapper: 'relative',
  top: {
    wrapper: 'border',
    container: 'py-2 lg:py-4'
  },
  bottom: {
    wrapper: '',
    container: 'py-4 lg:py-2 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
    left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
    center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
    right: 'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3'
  }
}

const props = defineProps({
  links: {
    type: Array,
    default: ()=>[],
  },
  class: {
    type: [String, Object, Array],
    default: undefined,
  },
  ui: {
    type: Object,
    default: ()=>({}),
  },
})

const {ui, attrs} = useUI('footer',
  toRef(props, 'ui'),
  config,
  toRef(props, 'class'),
  true,
)

defineOptions({ inheritAttrs: false})
</script>
