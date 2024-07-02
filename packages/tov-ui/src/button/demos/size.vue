<docs>
---
title: 按钮大小
---

通过size设置不同的按钮大小
</docs>

<script setup lang="ts">
function handClick() {
  console.log('cc')
}
</script>

<template>
  <t-button size="default" @click="handClick">
    按钮1
  </t-button>
  <t-button size="large" type="dash" @click="handClick">
    按钮2
  </t-button>
  <t-button size="small" type="primary" @click="handClick">
    按钮3
  </t-button>
</template>

<style scoped>

</style>
