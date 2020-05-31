import Vue from 'vue'
import VueRouter from 'vue-router'
import vCatalog from '../components/catalog/v-catalog'
import vCart from '../components/cart/v-cart'
import vUsers from '../components/users/v-table'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'catalog',
      component: vCatalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    },
    {
      path: '/users',
      name: 'users',
      component: vUsers,
      props: true
    }
  ]
})
export default router
