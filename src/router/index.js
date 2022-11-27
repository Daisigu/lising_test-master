import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import CurrentCarView from '../views/CurrentCarView.vue'
import ContactsView from '../views/ContactsView.vue'
import AdminView from '../views/AdminView.vue'
import CatalogView from '../views/CatalogView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/lk',
    name: 'lk',
    component: AccountView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/car/:id',
    name: 'car',
    component: CurrentCarView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
