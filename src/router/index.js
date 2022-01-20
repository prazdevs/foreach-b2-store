import Vue from 'vue'
import VueRouter from 'vue-router'

import * as names from './names'

import Home from '../views/Home'
import About from '../views/About'
import Post from '../views/Post'
import Posts from '../views/Posts'
import PostForm from '../views/PostForm'
import Page404 from '../views/Page404'
import ErrorPage from '../views/ErrorPage'

Vue.use(VueRouter)


const routes = [
  { path: '*', component: Page404 },
  { path: '/error', name: names.ERROR ,component: ErrorPage },
  { path: '/postform',name: names.POSTFORM, component: PostForm },
  { path: '/posts', name: names.POSTS ,component: Posts },
  { path: '/post/:id', name: names.POST, component: Post },
  { path: '/about', component: About },
  { path: '/', component: Home },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log('from' ,from)
  console.log('to', to)
  next()
})

export default router