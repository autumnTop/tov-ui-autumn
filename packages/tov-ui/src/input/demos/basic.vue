<docs>
---
  title: 基础使用
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
</template>

<style scoped>

</style>
