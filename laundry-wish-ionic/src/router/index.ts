import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/main-page/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: 'machines',
        component: () => import('@/views/machines/Machines.vue')
      },
      {
        path: 'customers',
        component: () => import('@/views/customers/Customers.vue')
      },
      {
        path: 'pos',
        component: () => import('@/views/point-of-sale/PointOfSale.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
