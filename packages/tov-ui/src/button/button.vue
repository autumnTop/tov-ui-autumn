<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useClassName } from '@tov-ui-autumn/utils'

export default defineComponent({
  name: 'TButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed' >,
      default: 'default',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<'small' | 'large' | 'default'>,
      default: 'default',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = function (e: Event) {
      emit('click', e)
    }
    const { c, cx, cm } = useClassName('button')
    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm(props.type))]: true,
        [c('size', cm(props.size))]: true,
      }
    })
    return {
      cls,
      handleClick,
    }
  },
})
</script>

<template>
  <button :disabled="disabled" :class="cls" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>

</style>
