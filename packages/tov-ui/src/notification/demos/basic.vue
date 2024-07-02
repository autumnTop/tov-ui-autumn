<docs>
---
  title: 基础使用
---

这是Notifitity通知
</docs>

<script setup lang="ts">
import { Notification } from 'tov-ui'
import { getCurrentInstance, h } from 'vue'
import Test from './test.vue'

const instance = getCurrentInstance()
function info() {
  Notification.info({
    content: h(Test),
    title: '标题',
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <!--  <TNotification /> -->
  <t-button @click="info">
    弹出
  </t-button>
</template>

<style scoped>

</style>
