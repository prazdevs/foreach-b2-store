import Vue from 'vue'
import VueRouter from 'vue-router'

import * as names from './names'

import Home from '../views/Home'
import About from '../views/About'
import Post from '../views/Post'
import Posts from '../views/Posts'
import PostForm from '../views/PostForm.vue'

Vue.use(VueRouter)


const routes = [
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

export default router