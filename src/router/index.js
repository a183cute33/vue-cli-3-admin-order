import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/components/order'
import Home from '@/components/home'
import Product from '@/components/product'



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  }]
})
