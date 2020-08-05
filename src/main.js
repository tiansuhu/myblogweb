import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/app.css'
import 'nprogress/nprogress.css'

// 请求模拟数据
// axios('/test/city').then(req => {
//   console.log('xxxxxxxxx', req)
// })

Vue.use(ElementUI)
<<<<<<< HEAD

Vue.prototype.$message = ElementUI.Message;
Vue.config.productionTip = false
=======
Vue.config.productionTip = false



>>>>>>> 701ec46cac2561a29da2d4e23e66b0409dfdd51c
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
