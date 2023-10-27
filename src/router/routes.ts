// 对外暴露配置路由(常量路由)
export const constantRoute = [
  // 1.主界面
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: '', // 菜单左侧图标
    },
    redirect: '/home',
    children: [
      // home
      {
        path: '/home',
        component: () => import('@/layout/Home.vue'),
        name: 'home',
        meta: {
          title: '',
          hidden: false,
          icon: '', // 菜单左侧图标
        },
      },
      // file
      {
        path: '/file',
        component: () => import('@/layout/FileDownLoad.vue'),
        name: 'file',
        meta: {
          title: '',
          hidden: false,
          icon: '', // 菜单左侧图标
        },
      },
      // soft
      {
        path: '/soft',
        component: () => import('@/layout/SoftDownLoad.vue'),
        name: 'soft',
        meta: {
          title: '',
          hidden: false,
          icon: '', // 菜单左侧图标
        },
      },
    ],
  },
  // ani
  {
    path: '/ani',
    component: () => import('@/layout/index1.vue'),
    name: 'ani',
    meta: {
      title: '',
      hidden: false,
      icon: '', // 菜单左侧图标
    },
  },
  // 1.星空
  {
    path: '/xk',
    component: () => import('@/layout/xk.vue'),
    name: 'xk',
    meta: {
      title: '',
      hidden: false,
      icon: '', // 菜单左侧图标
    },
  },
  // 404
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    name: '404',
    meta: {
      title: '',
      hidden: false,
      icon: '', // 菜单左侧图标
    },
  },
  // 404
  {
    path: '/test',
    component: () => import('@/views/test.vue'),
    name: 'test',
    meta: {
      title: '',
      hidden: false,
      icon: '', // 菜单左侧图标
    },
  },
]
