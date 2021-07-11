import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jsx',
    name: 'jsx',
    component: () => import(/* webpackChunkName: "jsx" */ '../views/jsx/index.vue')
  },
  {
    path: '/source',
    name: 'source',
    component: () => import(/* webpackChunkName: "source" */ '../views/source/index.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/vuex/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
