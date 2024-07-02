<docs>
---
  title: 基础使用
---

这是tooltip组件
</docs>

<script setup lang="ts">

</script>

<template>
  <t-tooltip>
    <t-button>俺</t-button>
    <template #content>
      <span style="color: red">测试啊啊</span>
    </template>
  </t-tooltip>

  <t-tooltip trigger="click">
    <t-button>俺22</t-button>
    <template #content>
      <span style="color: red">测试啊啊</span>
    </template>
  </t-tooltip>
</template>

<style scoped>

</style>
