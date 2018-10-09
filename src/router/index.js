import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '@/components/index'
// import love from '@/components/page/love'
import happy from '@/components/page/happy'
import animate from '@/components/page/animate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/common/home.vue'], resolve),
      redirect:"index",
      children:[
          {
              path: 'index',
              name: 'index',
              component: resolve => require(['../components/index.vue'], resolve),
          }, {
              path: 'love',
              name: 'love',
              component: resolve => require(['../components/page/love.vue'], resolve),
          }, {
            path: 'happy',
            name: 'happy',
            component: happy
          }, {
            path: 'animate',
            name: 'animate',
            component: animate
          }
      ]
    }
  ]
})
