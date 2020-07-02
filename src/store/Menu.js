//用户仓库
export default {
    namespaced:true,//开启命名控件
    state: {
        //菜单信息
        MenuDada:null,   //菜单信息
        Loadrouter:false //确定是否加载了路由 这个地方用vuex来做可以判断是否强制刷新了 默认没有加载
    },
    mutations: {
        setMenuDada(state,payload){
            state.MenuDada = payload;
            // sessionStorage.setItem('Routers',JSON.stringify( payload));//将菜单本地存储
        },
        setLoadrouter(state,payload){
            state.Loadrouter = payload;//设置是否加载了路由
        }

    },
    actions: {
        setMenuDada(context,payload){
            //  console.log(payload);
            context.commit('setMenuDada',payload);//保存菜单
            
        } ,
        setLoadrouter(context,payload){
            context.commit('setLoadrouter',payload);//
        }
    },
    getters:{
        getMenuData(state){ 
            return state.MenuDada; //不用本地化 
        },

        getLoadRouter(state){
            return state.Loadrouter;//
        }
    },
    modules: {
    }
  }