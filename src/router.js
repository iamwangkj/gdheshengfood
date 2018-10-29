import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Recruit from './views/Recruit'
import About from './views/About'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
