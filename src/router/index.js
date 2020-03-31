import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
