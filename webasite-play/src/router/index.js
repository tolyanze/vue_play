import { createRouter, createWebHistory } from 'vue-router'
import PlayOne from '../views/PlayOne.vue'

const routes = [
  {
    path: '/',
    name: 'PlayOne',
    component: PlayOne
  },
  {
    path: '/PlayTwo',
    name: 'PlayTwo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PlayTwo" */ '../views/PlayTwo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
