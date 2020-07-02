import axios from '@/axios/index'
const basurl = "";

//Post 获取菜单数据
export const getMenu= ((param)=>{
    return axios.post(basurl+'/menu',param);
});
//登录
export const Login = ((param)=>{
    return axios.post(basurl + '/LoginIn',param);
});


