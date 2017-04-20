import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

import demo01 from '@/pages/demo01/index.vue'
import demo02 from '@/pages/demo02/index.vue'
import demo03 from '@/pages/demo03/index.vue'

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
  }]
})
