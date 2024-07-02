<docs>
---
title: 禁用按钮
---

设置`disable`属性为`true`可以禁用按钮
</docs>

<script setup lang="ts">
function handClick() {
  console.log('cc')
}
</script>

<template>
  <t-button disabled @click="handClick">
    按钮1
  </t-button>
  <t-button disabled type="dash" @click="handClick">
    按钮2
  </t-button>
  <t-button disabled type="primary" @click="handClick">
    按钮3
  </t-button>
</template>

<style scoped>

</style>
