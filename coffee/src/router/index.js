import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

import demo01 from '@/pages/demo01/index.vue'
import demo02 from '@/pages/demo02/index.vue'
import demo03 from '@/pages/demo03/index.vue'
import demo04 from '@/pages/demo04/index.vue'
import demo05 from '@/pages/demo05/index.vue'

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/demo01',
    name: 'DEMO01',
    component: demo01
  }, {
    path: '/demo02',
    name: 'DEMO02',
    component: demo02
  }, {
    path: '/demo03',
    name: 'DEMO03',
    component: demo03
  }, {
    path: '/demo04',
    name: 'DEMO04',
    component: demo04
  }, {
    path: '/demo05',
    name: 'DEMO05',
    component: demo05
  }]
})
