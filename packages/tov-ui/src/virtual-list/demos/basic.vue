<docs>
---
  title: 基础使用
---

这是虚拟列表组件
</docs>

<script setup lang="ts">
const data = Array.from({ length: 1000 }).map((_, i) => {
  return {
    name: `test${i}${1}`,
    index: i + 1,
  }
})
function handleClick(item: any) {
  console.log('t', item)
}
</script>

<template>
  <TVirtualList :data="data" @click-item="handleClick">
    <template #item="{ item }">
      <div class="data.item">
        {{ item.name }}
      </div>
    </template>
  </TVirtualList>
</template>

<style scoped>
.data-item {
  display: flex;
  align-items: center;
}
</style>
