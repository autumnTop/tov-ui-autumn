<docs>
---
  title: 输入框大小
---

这是input组件
</docs>

<script setup lang="ts">
import { ref } from 'vue'
import { Input as TInput } from 'tov-ui'

const value = ref('')
</script>

<template>
  <TInput v-model="value" />
  <TInput v-model="value" size="large" />
  <TInput v-model="value" size="small" />
</template>

<style scoped>

</style>
