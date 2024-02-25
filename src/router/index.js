import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/IndexView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: Layout,
    meta: {title: '首页', icon: 'el-icon-s-home'},
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/IndexView'),
      meta: {title: '首页', icon: 'el-icon-s-home'}
    }]
  },
  {
    path: '/music',
    redirect: '/music/manager',
    name: '音乐管理',
    component: Layout,
    meta: {title: '音乐管理', icon: 'el-icon-headset'},
    children: [
      {
        path: 'manager',
        name: '音乐管理',
        component: () => import('@/views/music/ManagerView'),
        meta: {title: '音乐管理', icon: 'el-icon-headset'}
      },
      {
        path: 'playlist',
        name: '音乐歌单',
        component: () => import('@/views/music/PlayListView'),
        meta: {title: '音乐歌单', icon: 'el-icon-s-order'},
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
