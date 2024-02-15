import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'index',
    component: () => import('@/layout/IndexView'),
    children: [
      {
        path: '/dashboard',
        name: '主页',
        component: () => import('@/views/dashboard/IndexView'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
