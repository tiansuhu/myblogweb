import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/app.css'
import './api/mock.js'
import './api/Usermock'
import 'nprogress/nprogress.css'

// 请求模拟数据
// axios('/test/city').then(req => {
//   console.log('xxxxxxxxx', req)
// })

Vue.use(ElementUI)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
