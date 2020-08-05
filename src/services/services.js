import axios from '@/axios/index'
const basurl = "http://localhost:2618/api";

//Post 获取菜单数据
export const getMenu= ((param)=>{
    return axios.post('/menu',param);
});
//登录
export const Login = ((param)=>{
  debugger;
    return axios.post('/LoginIn',param);
});

/*用户操作*/
//add user
/*
@param:{
  "user": {
    "userCode": "string",
    "userName": "string",
    "userQQ": "string",
    "userWeChat": "string",
    "userPhone": "string",
    "userEmail": "string",
    "userCountry": "string",
    "userProvice": "string",
    "userCity": "string",
    "userAddress": "string",
    "isAdmin": true,
    "isActivy": true,
    "appellation": "string",
    "birthday": "2020-07-07T02:27:09.484Z",
    "password": "string",
    "imgUrl": "string",
  },
  "organizationUser": {
    "userid": "string",
    "orgid": "string",
    "creater": "string",
  }
}
*
*/
export const AddUserModel = (param=>{
    return axios.post({basurl} + '/admin/User/AddUserModel',param);
})

//获取组织
export const GetOrgChilds = (param=>{
  debugger;
  return axios.post('/api/admin/Org/GetOrgChilds',param);
})


