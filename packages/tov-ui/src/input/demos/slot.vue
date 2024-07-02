<docs>
---
  title: input插槽
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'
import { Input as TInput } from 'tov-ui'

const value = ref('')
</script>

<template>
  <TInput v-model="value">
    <template #prefix>
      A
    </template>
    <template #suffix>
      BB
    </template>
  </TInput>
</template>

<style scoped>

</style>
