import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Homepage from '../views/index/Homepage.vue'
import Change from '../views/index/Change.vue'
import Battery from '../views/index/Battery.vue'
import Wisdom from '../views/index/Wisdom.vue'
import About from '../views/index/About.vue'

import Login from '../views/admin/Login.vue'
import Admin from '../views/admin/Admin.vue'
import Page from '../views/admin/Page.vue'
import User from '../views/admin/User.vue'
import News from '../views/admin/News.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home',
    children: [
      { path: '/home', component: Homepage },
      { path: '/change', component: Change },
      { path: '/battery', component: Battery },
      { path: '/wisdom', component: Wisdom },
      { path: '/about', component: About }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/page',
    children: [
      { path: '/page', component: Page },
      { path: '/user', component: User },
      { path: '/news', component: News }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
