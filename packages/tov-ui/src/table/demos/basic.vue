<docs>
---
title: 基础使用
---

这是table组件
</docs>

<script setup lang="ts">
import { Table as TTable } from 'tov-ui'
import { ref } from 'vue'

const columns = ref([
  {
    title: '名字',
    key: 'name',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '地址',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
  },
])
const data = ref(Array.from({ length: 10 }).map((_, index) => {
  return {
    name: `小虎${index}`,
    age: 1 + index,
    address: `山东省等哈时空对话卡仕达酱上课${index}`,
    action: index % 2 === 0 ? '添加' : '删除',
  }
}))
</script>

<template>
  <TTable :columns="columns" :data="data">
    <!--    2122 -->
    <t-table-column key="name" title="姓名" />
    <t-table-column key="age" title="年龄" />
    <t-button />
  </TTable>
</template>

<style scoped>

</style>
