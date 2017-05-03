import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index/index.vue'

import Nav from '@/pages/nav/index.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/nav',
    name: 'Nav',
    component: Nav
  }]
})
