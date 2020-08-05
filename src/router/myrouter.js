//后台动态添加路由
export const  filterAsyncRouter = (asyncRouterMap=> { //遍历后台传来的路由字符串，转换为组件对象
    let routenarray = [];
    let menutype={
      link:0,
      menuparentNode:1
    }
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
        if(menudata.menu.type ==menutype.menuparentNode)
        {
            routen.component=()=>{
                return import('@/views/home/home.vue');
            };
        }else{
            routen.component=()=>{ 
                return import('@/'+menudata.menu.component)
            }
        }
        routen.path = menudata.menu.path;
        routen.name = menudata.menu.name;

        routen.meta.title = menudata.menu.displayName;
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
    if(asyncRouterMap&&asyncRouterMap.length>0){
      let router = filterAsyncRouter(asyncRouterMap)
      console.log(router);
      homerouter.children = router;//将后台的菜单添加到home菜单的子集中
    }
    
        return [homerouter];
  }



