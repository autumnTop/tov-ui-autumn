import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tov UI',
  description: 'This is a vue component library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' }, // 没有加/，就是加载introduce文件
      { text: '组件', link: '/components/' }, // 加了 /默认加载 components下面的index文件
      { text: '工具', link: '/utils/' },
    ],
    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
        {
          text: '输入框',
          link: '/components/input/',
        },
        {
          text: 'tooltip',
          link: '/components/tooltip/',
        },
        {
          text: 'table表格',
          link: '/components/table/',
        },
        {
          text: '虚拟列表',
          link: '/components/virtual-list/',
        },
        {
          text: '通知',
          link: '/components/notification/',
        },
        {
          text: 'Icon',
          link: '/components/icons/',
        },
      ],
      '/utils/': [
        {
          text: 'genClass',
          link: 'utils/gen-class',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)', // 动态comp映射
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',
  },
})
