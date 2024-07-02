<docs>
---
  title: 基础使用
---

这是基础例子
</docs>

<script setup lang="ts">
function handClick() {
  console.log('cc')
}
</script>

<template>
  <t-button @click="handClick">
    按钮1
  </t-button>
  <t-button type="dash" @click="handClick">
    按钮2
  </t-button>
  <t-button type="primary" @click="handClick">
    按钮3
  </t-button>
</template>

<style scoped>

</style>
