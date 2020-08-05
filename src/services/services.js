import axios from '@/axios/index' 
import {getUserStorage} from '@/storage/storage'
//Post 获取菜单数据
export const getMenu= ((param)=>{
    return axios.post('/api/admin/Menu/GetMenu',param);
});

//删除 菜单
export const DeleteMenu= ((param)=>{
  return axios.post('/api/admin/Menu/Delete',param);
});


// 添加菜单
export const AddMenu=((param)=>{
  let auth = getUserStorage();
  let headers = {
    'Content-Type':'application/json',//'application/x-www-form-urlencoded;charset=utf-8',
    'ajaxRequested':'ajaxRequested',
  }
  if(auth&&auth.length>0){
    let auth1 = JSON.parse(auth)
     headers = {
      'Content-Type':'application/json',//'application/x-www-form-urlencoded;charset=utf-8',
      'ajaxRequested':'ajaxRequested',
      'Authorization':auth1.userToken
    }; 
  }
return axios.post('/api/admin/Menu/Add',param,headers);
})

//更新菜单
export const UpdateMenu=((param)=>{
  let auth = getUserStorage();
  let headers = {
    'Content-Type':'application/json',//'application/x-www-form-urlencoded;charset=utf-8',
    'ajaxRequested':'ajaxRequested',
  }
  if(auth&&auth.length>0){
    let auth1 = JSON.parse(auth)
    headers = {
      'Content-Type':'application/json',//'application/x-www-form-urlencoded;charset=utf-8',
      'ajaxRequested':'ajaxRequested',
      'Authorization':auth1.userToken
    }; 
  }
  return axios.post('/api/admin/Menu/Update',param,headers);
  })



//登录
export const Login = ((param)=>{
  debugger;
    return axios.post('/api/Login/LoginIn',param);
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


