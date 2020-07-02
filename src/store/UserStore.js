//用户仓库
export default {
    namespaced:true,//开启命名控件
    state: {
        //菜单信息
        userData:{}
    },
    mutations: {
        setUser(state,payload){
            state.userData = payload;
            sessionStorage.setItem("user",JSON.stringify(payload) );//持久化用户信息
        }
    },
    actions: {
        async setUser(context,payload){
            console.log(payload);
            context.commit('setUser',payload)
        } 
    },
    getters:{
        getUser(state){
            if(state.userData)//当用户信息不存在的时候 F5刷新
            {
               
                let v = JSON.parse(sessionStorage.getItem("user"))
                console.log(v);

                state.userData = v;
            }
            return state.userData;//获取当前用户信息
        }
    },
    modules: {
    }
  }