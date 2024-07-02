<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useClassName } from '@tov-ui-autumn/utils'

import { omit, pick } from 'lodash-es'
import { type InputProps, originInputProps } from './interface.ts'

// 过滤或选择属性

defineOptions({
  name: 'TInput',
  inheritAttrs: false, // 如果为true，那么全部属性都会继承到div上，而不是input
})
const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue': [string]
}>()
defineSlots<{
  prefix(): any
  suffix(): any
}>()
const inputRef = ref<HTMLInputElement>()
function setInputValue() {
  const input = inputRef.value
  if (!input || input.value === props.modelValue)
    return
  input.value = props.modelValue ?? ''
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.value === props.modelValue)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}

const { c, cx, cm, ce } = useClassName('input')
const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size!))]: !!props.size, // props.size!代表一定有值，进行非空断言
  }
})

const inputCls = cx(() => {
  return {
    [c('input')]: true,
  }
})

function focus() {
  inputRef.value?.focus()
}
function blur() {
  inputRef.value?.blur()
}
defineExpose({
  focus,
  blur,
})

onMounted(() => {
  setInputValue()
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="inputRef" v-bind="pick($attrs, originInputProps)" :disabled="disabled" :class="inputCls" :value="modelValue" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>

<style scoped>

</style>
