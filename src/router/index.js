import { createRouter, createWebHashHistory } from 'vue-router'
import MegaMart from '../views/MegaMart.vue'

const routes = [
  {
    path: '/',
    name: 'mega-mart',
    component: MegaMart
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
