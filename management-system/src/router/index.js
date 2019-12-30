import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/VideoManage/Video')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage/User')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/MoreFuc/PageOne')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/MoreFuc/PageTwo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
