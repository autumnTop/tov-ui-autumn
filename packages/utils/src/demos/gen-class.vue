<script lang="ts" setup>
import { ref } from 'vue'
import { useClassName } from '../gen-class.ts'

const testRef = ref(false)
function handleClick() {
  testRef.value = !testRef.value
}
const { c, cx, ce } = useClassName('button')
const cls = cx(() => (
  {
    c: true,
    d: testRef.value,
  }
))
</script>

<template>
  <div :class="c('primary')">
    {{ cls }}
    {{ c('a', 'b', ce('primary')) }}
    <button @click="handleClick">
      按钮
    </button>
  </div>
</template>
