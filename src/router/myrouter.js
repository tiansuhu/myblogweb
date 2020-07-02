//   const _import = resolve => require(resolve)//获取组件的方法
  
// const _import = path=>{
//     return  import(path);
//   }

//   const Foo = (path) => import('@/'+path)

// export  const dataroutes = [
//     {
//       path: '/home',
//       name: 'home',
//       meta: {
//         title: '首页',
//         auth: false
//       },
//       children: [
//         {
//           path: 'home',
//           name: 'hhome',
//           meta: {
//             title: '首页',
//             auth: false
//           },
//           component: function () { return import('../views/home/home.vue') }
//         },
//         {
//           path: 'hello',
//           name: 'hello',
//           meta: {
//             title: "快乐",
//             auth: false
//           },
//           component: function () {
//             return import('../views/home/hello.vue')
//           }
//         },
//         {
//           path: 'organizaiton',
//           name: 'organizaiton',
//           meta: {
//             title: "组织",
//             auth: false
//           },
//           component: function () {
//             return import('../views/home/Orgnization.vue')
//           }
//         },
//         {
//           path: 'user',
//           name: 'user',
//           meta: {
//             title: "用户",
//             auth: false
//           },
//           component: function () {
//             return import('../views/home/User.vue')
//           }
//         },
//         {
//           path: '*',
//           name: '404',
//           meta: {
//             title: '404',
//             auth: false
//           },
//           component: function () {
//             return import('../views/NotFind.vue')
//           }
//         }
//       ],
//       component: function () { return import('../views/Home.vue') }
//     }
//   ]


//后台动态添加路由
export const  filterAsyncRouter = (asyncRouterMap=> { //遍历后台传来的路由字符串，转换为组件对象
    let routenarray = [];
debugger;
    const accessedRouters = asyncRouterMap.filter(menudata => {
        let  routen = {
            path: '',
            name: '',
            redirect:'',
            meta: {
              title: '',
              auth: false
            },
            children: [],
            component:Object
            // function(){
            //     return import('@/'+menudata.component)
            // }
        };
        if(menudata.type =="menuparentNode" )
        {
            routen.component=()=>{
                return import('@/views/home/home.vue');
            };
        }else{
            routen.component=()=>{
                return import('@/'+menudata.component)
            }
        }
        routen.path = menudata.path;
        routen.name = menudata.name;

        routen.meta.title = menudata.displayName;
      if (menudata.children && menudata.children.length) {
        routen.children = filterAsyncRouter(menudata.children)
        // let childroutarray = filterAsyncRouter(menudata.children)
        // routenarray = routenarray.concat(childroutarray);//所有的路由都是在home中
      }
    //   if(menudata.type==="link")
      {
        routenarray.push(routen);
      }
     
      return true
    })
    return routenarray
  });

  export const InitAsyncRounter = (asyncRouterMap)=>
  {
    let router = filterAsyncRouter(asyncRouterMap)
    console.log(router);
    let homerouter = {
        path: '/home',
        name: '首页', 
        meta: {
          title: '首页',
          auth: false
        },
        children: [],
        component: function () {
            return import('../views/Home.vue')
          }
    }
    homerouter.children = router;//将后台的菜单添加到home菜单的子集中
        return [homerouter];
  }



