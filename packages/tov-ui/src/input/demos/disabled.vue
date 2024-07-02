<docs>
---
  title: 禁用input
---

这是input组件
</docs>

<script setup lang="ts">
import { ref } from 'vue'
import { Input as TInput } from 'tov-ui'

const value = ref('')
</script>

<template>
  <TInput v-model="value" disabled />
</template>

<style scoped>

</style>
