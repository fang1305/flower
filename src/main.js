// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)

//全局注册组件
var headLogo =  {
    template:'<p>欢迎来 到我的vue学习中心</p>'
};
var myHeader = Vue.component('my-header', {
    template:'<p><component :is="head"></component>时间是自己的,还望谨记,好好利用.</p>',
    data(){
        return {
            head:"head-logo"
        }
    },
    components:{
        'head-logo':headLogo
    }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
//   render:h => h(App)
  router,
  components: { myHeader,App },
  template: '<App/>',
  data:{
      name:'姓名'
  }
})
