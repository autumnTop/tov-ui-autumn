import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'
import { useClassName } from '@tov-ui-autumn/utils'
import type { NotificationConfig, NotificationConfigType, NotificationInstance } from './interface.ts'

export default defineComponent<{
  onReady: (instance: NotificationInstance) => void
}>({
      name: 'TNotification',
      setup(props, { expose }) {
        const data = ref<NotificationConfigType[]>([])
        const index = 0
        const add = (config: NotificationConfig) => {
          const instance: NotificationConfigType = {
            ...config,
            _id: index,
          }
          // 自动过时销毁
          const close = () => {
            const index = data.value.findIndex(item => item._id === instance._id)
            if (index !== -1)
              data.value.splice(index, 1)
            if (instance._timer)
              clearTimeout(instance._timer)
          }
          // 没设置就是undefined，一样执行
          if (instance.duration !== 0) {
            instance._timer = setTimeout(() => {
              close()
            }, instance.duration ?? 3000)
          }
          data.value.push(instance)
          return close
        }

        const { c } = useClassName('notification')
        const cls = {
          [c('wrapper')]: true,
        }
        const titleCls = {
          [c('wrapper', 'title')]: true,
        }
        const contentCls = {
          [c('wrapper', 'content')]: true,
        }

        const renderNotification = () => {
          return data.value.map((item) => {
            return (
              <div class={cls} key={item._id}>
                <div class={titleCls}>{item.title}</div>
                <div class={contentCls}>{item.content}</div>
              </div>
            )
          })
        }
        const onReady = () => {
          console.log('ready')
          props.onReady?.({
            add,
          })
        }
        onMounted(() => {
          onReady()
        })

        expose({
          add,
        })
        return () => {
          const notificationCls = {
            [c()]: true,
          }
          return (
            <>
              <div class={notificationCls}>
                <TransitionGroup tag="div" name="tov-slider-right">
                  {renderNotification()}
                </TransitionGroup>
              </div>
            </>
          )
        }
      },
    })
