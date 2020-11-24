import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/main')
    },
    {
      path: '/index',
      component: () => import('@/views/main')
    },
    {
      path: '/introduce',
      component: () => import('@/views/introduce')
    },
    {
      path: '/exhibition',
      component: () => import('@/views/exhibition')
    },
    {
      path: '/guide',
      component: () => import('@/views/guide')
    },
    {
      path: '/wen_gen_products',
      component: () => import('@/views/wen_gen_products')
    },
    {
      path: '/ticket',
      component: () => import('@/views/ticket')
    },
  ]
})
