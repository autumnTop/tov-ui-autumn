import type { PropType, VNode } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'

// 这个包提供了 Vue 绑定@floating-ui/dom——一个为浮动元素提供锚点定位的库，可以将其定位在给定的参考元素旁边
import { type Placement, offset, useFloating } from '@floating-ui/vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassName } from '@tov-ui-autumn/utils'

export default defineComponent({
  name: 'TTooltip',
  props: {
    placement: { // 位置
      type: String as PropType<Placement>,
      default: 'top',
    },
    content: {
      type: String as PropType<string>,
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    const reference = ref(null)
    const floating = ref(null)
    const placement = computed(() => props.placement)
    const show = ref<boolean>(false)
    // 第三方库的用法
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(4)],
    })
    const { c } = useClassName('tooltip')
    let timer: ReturnType<typeof setTimeout> | undefined
    // 控制显示和隐藏
    const handleMouseEnter = () => {
      if (props.trigger !== 'hover')
        return
      show.value = true
    }
    const handleMouseLeave = () => {
      timer = setTimeout(() => {
        show.value = false
      }, 150)
    }
    const handleClick = () => {
      if (props.trigger !== 'click')
        return
      show.value = true
    }

    // 只有return里面的东西有响应式
    return () => {
      const cls = {
        [c()]: true,
      }
      const renderTooltip = () => {
        if (!reference.value)
          return null
        if (!show.value)
          return null

        const events = {
          onMouseenter: () => {
            if (timer)
              clearTimeout(timer)
            timer = undefined
          },
          onMouseleave: () => {
            show.value = false
          },
        }
        return (
        // 具名插槽slots.content
          <div {...events} class={cls} ref={floating} style={floatingStyles.value}>
            { slots.content ? slots.content() : props.content}
          </div>
        )
      }
      // filterEmpty方法过滤掉插槽里面的注释什么的
      // slots.default传过来的默认插槽，当没有命名就是default
      const children = filterEmpty(slots.default?.())
      if (children && children.length < 1)
        return null

      if (children && children.length > 1) {
        console.warn('tooltip只能含有一个插槽')
        return children
      }
      const node = children[0]
      if (isBaseType(node)) {
        console.warn('tooltip 必须包含一个子组件')
        return node
      }
      const events = {
        // key值必须对应JS内部的方法名称
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
      }
      // 插槽
      const tipNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })
      console.log('slot', slots)
      return (
        <>
          {tipNode}
          {renderTooltip()}
        </>
      )
    }
  },
})
