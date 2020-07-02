import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import { getMenu } from '@/services/services'
import { InitAsyncRounter } from '@/router/myrouter'
import {getUserStorage} from '@/storage/storage.js'
Vue.use(VueRouter)
import NProgress from 'nprogress'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: "登录",
      auth: false
    },
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404',
      auth: false
    },
    component: function () {
      return import('../views/NotFind.vue')
    }
  }

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由拦截
router.beforeEach((to, from, next) => {
  //进度条
  NProgress.start();
  if (to.path == "/login") {
    next()
  }
  else {
    let token = getUserStorage(); //存储当前用户信息
    if (token) {
      let IsLoadRouter = store.getters['Menu/getLoadRouter'];//判断路由是否加载过
      if (IsLoadRouter) { //判断是否加载了路由 如果加载了 不管
        next();
      }
      else { //没有加载 就加载一次路由
        let menuData = store.getters['Menu/getMenuData']//
        if (menuData) {//如果存在
          let getRouter = InitAsyncRounter(menuData) //过滤路由
          router.addRoutes(getRouter)
          store.dispatch('Menu/setLoadrouter',true);//添加路由加载状态
          next({ path: to.path })

        } else {//通过当前用户获取当前用户的菜单 并动态加载路由
          getMenu(store.getters["UserStore/getUser"]).then(res => {
            let data = res[1];
            store.dispatch('Menu/setMenuDada', data);
            let menuData = store.getters['Menu/getMenuData']//
            let getRouter = InitAsyncRounter(menuData) //过滤路由  
            router.addRoutes(getRouter);
            store.dispatch('Menu/setLoadrouter',true);//添加路由加载状态
            next({ path: to.path })
          });
        }
      }
    } else {
      next('/login');
    }

  }

});

router.afterEach(() => {
  //进度条完成
  NProgress.done()
})

export default router
