import Mock from 'mockjs'

const Random = Mock.Random

// mock需要给三个参数,url(与axios请求是传的url一致,我这个是本地启动的项目就直接用本地域名了)
// 请求类型: get post...其他看文档
// 数据处理函数,函数需要return数据
Mock.mock('/test/city', 'get', () => {
  let citys = []
  for (let i = 0; i < 10; i++) {
    let obj = {
      id: i+1,
      city: Random.city(),
      color: Random.color()
    }
    citys.push(obj)
  }
  return {cityList: citys}
})
 


//获取用户菜单
Mock.mock('/menu','post',(postjs)=>{
  let ico = ['el-icon-s-tools','el-icon-user-solid','el-icon-s-home','el-icon-s-custom','el-icon-menu']
  let menutype={
    link:"link",
    menuparentNode:"menuparentNode"
  }
let munulist = []; 
     var menuData = {
      menuid: "001", //id
      displayName: "快乐",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.link,//菜单类型
      path:"/home/hello", //菜单路径
      name:"hello",//菜单名称 
      component:"views/home/hello.vue",//对应的页面
      children:[] //子目录
     } ;

     var menuData1 = {
      menuid: "002", //id
      displayName: "组织管理",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.link,//菜单类型
      path:"/home/organizaiton", //菜单路径
      name:"organizaiton",//菜单名称 
      component:"views/home/OrgnizationManager/Orgnization.vue",//对应的页面
      children:[] //子目录
     } ;

     var menuData2 = {
      menuid: "003", //id
      displayName: "角色管理",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.link,//菜单类型
      path:"/home/role", //菜单路径
      name:"role",//菜单名称 
      component:"views/home/RoleManager/Role.vue",//对应的页面
      children:[] //子目录
     } ;

     var menuData3 = {
      menuid: "004", //id
      displayName: "菜单管理",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.menuparentNode,//菜单类型
      path:"/home/menuManager", //菜单路径
      name:"menuManager",//菜单名称 
      component:"",//对应的页面
      children:[] //子目录
     } ;
     var menuData3_2 = {
      menuid: "0042", //id
      displayName: "菜单管理1",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.menuparentNode,//菜单类型
      path:"/home/menuManager/menuchildMamager", //菜单路径
      name:"menuchildMamager_menuchildMamager",//菜单名称 
      component:"",//对应的页面
      children:[] //子目录
     } ;

     var menuData3_1 = {
      menuid: "004-1", //id
      displayName: "菜单列表",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.link,//菜单类型
      path:"/home/menuManager/menu", //菜单路径
      name:"menuManager",//菜单名称 
      component:"views/home/MenuManager/MenuList.vue",//对应的页面
      children:[] //子目录
     } ;
     
     var menuData3_2_1 = {
      menuid: "005", //id
      displayName: "菜单列表1",//菜单名称
      ico:ico[Random.integer(0,4,Number)], //菜单图标
      type:menutype.link,//菜单类型
      path:"/home/menuManager/menuchildMamager/menu", //菜单路径
      name:"menuchildMamager_menu",//菜单名称 
      component:"views/home/MenuManager/MenuList.vue",//对应的页面
      children:[] //子目录
     } ;
    //  menuData3_2.children.push(menuData3_2_1);
    //  menuData3.children.push(menuData3_2);
     menuData3.children.push(menuData3_1);
     var postjs = JSON.parse(postjs.body);
  if(postjs.code&&postjs.code == "admin"){
    // menuData0.children.push()
    munulist.push(menuData);
    munulist.push(menuData1);
    munulist.push(menuData2); 
    munulist.push(menuData3);
  }else{
    munulist.push(menuData);
    munulist.push(menuData1);
    // munulist.push(menuData2);
  }
    
  return munulist;
})