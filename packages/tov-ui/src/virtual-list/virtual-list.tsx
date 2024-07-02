import type { CSSProperties } from 'vue'
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useClassName } from '@tov-ui-autumn/utils'

export default defineComponent({
  name: 'TVirtualList',
  emits: ['clickItem'],
  props: {
    height: {
      type: Number,
      default: 300,
    },
    itemHeight: {
      type: Number,
      default: 40,
    },
    data: {
      type: Array,
      default: () => [],
    },
    buffer: {
      type: Number,
      default: 5,
    },
  },
  setup(props, { emit }) {
    const { c } = useClassName('vitrual-list')
    const containerRef = ref<HTMLElement | null>(null)
    const scrollTop = ref(0)
    const onScroll = () => {
      console.log('contaneier', containerRef.value)
      scrollTop.value = containerRef.value?.scrollTop || 0
    }
    onMounted(() => {
      if (containerRef.value)
        containerRef.value.addEventListener('scroll', onScroll)
    })
    onUnmounted(() => {
      if (containerRef.value)
        containerRef.value.removeEventListener('scroll', onScroll)
    })

    const containerHeight = computed(() => {
      if (containerRef.value)
        return containerRef.value.clientHeight

      return props.height
    })
    const handleClick = (item: any) => {
      emit('clickItem', item)
    }
    const sliceItems = computed(() => {
      const itemHeight = props.itemHeight
      const buffer = props.buffer
      // 可视区域展示个数
      const showCounter = Math.ceil(containerHeight.value / itemHeight)
      // 可视区域展示第一个元素的index
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer
      const startIndex = Math.max(0, counterIndex)
      const endIndex = showCounter + buffer * 2 + counterIndex
      return props.data.slice(startIndex, endIndex).map((item, index) => {
        return {
          item,
          top: (index + startIndex) * itemHeight,
          key: `VirtualList${startIndex + index}`,
        }
      })
    })

    return {
      c,
      containerRef,
      sliceItems,
      handleClick,
    }
  },
  render() {
    const { c, height, itemHeight, data, sliceItems, handleClick } = this
    const slots = this.$slots
    // 可视区域
    const containerCls = {
      [c()]: true,
    }
    // 内容长度区域, 很长很长
    const bodyCls = {
      [c('body')]: true,
    }
    const containerStyle: CSSProperties = {
      height: `${height}px`,
    }
    const bodyH = data.length * itemHeight
    const bodyStyle: CSSProperties = {
      height: `${bodyH}px`,
    }
    const renderItems = () => {
      const height = itemHeight ?? 40
      const itemCls = {
        [c('item')]: true,
      }
      return sliceItems.map((item) => {
        const itemStyle: CSSProperties = {
          height: `${height}px`,
          top: `${item.top}px`,
        }
        const onClick = () => {
          handleClick(item.item)
        }
        return (
          <div onClick={onClick} class={itemCls} style={itemStyle} key={item.key}>
            {slots.item && slots.item({ item: item.item })}
          </div>
        )
      })
    }

    return (
      <div class={containerCls} ref="containerRef" style={containerStyle}>
        <div class={bodyCls} style={bodyStyle}>
          {renderItems()}
        </div>
      </div>
    )
  },
})
