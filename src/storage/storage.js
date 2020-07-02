// 持久化操作

//获取缓存中的用户
export const getUserStorage=()=>{
    return sessionStorage.getItem("user");//获取当前用户信息
}
//将用户数据存入到缓存中
export const setUserStorage = (userinfo)=>{
    sessionStorage.setItem("user",userinfo);//保存当前用户信息
}
//将当前用户信息从缓存中清楚
export const removeUserStorage =()=>{
    sessionStorage.removeItem("user");//清楚当前用户信息
}

