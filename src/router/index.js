import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Post from '../views/Post'
import Posts from '../views/Posts'

Vue.use(VueRouter)


const routes = [
  { path: '/posts', component: Posts },
  { path: '/post/:id', component: Post },
  { path: '/about', component: About },
  { path: '/', component: Home },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router