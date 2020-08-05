import Mock from 'mockjs'
//获取组织
Mock.mock('/api/admin/Org/GetOrgChilds', 'post', (postjs) => {
    var postjs = JSON.parse(postjs.body);
    console.log(postjs);
    var parentid = postjs.parentId;
    var data = {};
    // if(parentid==""||parentid == null)
     data =   
    {
        "code": 10000,
        "success": true,
        "msg": "成功",
        "data": [
          {
            "organization": {
              "orgCode": "MyCompany",
              "orgName": "我的公司",
              "isroot": true,
              "id": "od9a2123-2151-43cf-b8f0-384dbf763740",
              "creater": "ad9a2123-2151-43cf-b8f0-384dbf763741",
              "createrTime": "2020-07-07T20:01:32.407",
              "modifier": null,
              "modifiedTime": "1753-01-01T00:00:00",
              "extends1": null,
              "extends2": null,
              "extends3": null,
              "extends4": null,
              "extends5": null,
              "extends6": null,
              "extends7": null,
              "extends8": null
            },
            "parentOrgId": null
          }
        ]
      } 

    //   if(parentid == "od9a2123-2151-43cf-b8f0-384dbf763740")
      
       var  data1 = {
            "code": 10000,
            "success": true,
            "msg": "成功",
            "data": [
              {
                "organization": {
                  "orgCode": "testdep1",
                  "orgName": "测试部门1",
                  "isroot": false,
                  "id": "e3abc402-06a4-4163-b32c-69137b58b597",
                  "creater": null,
                  "createrTime": "1753-01-01T00:00:00",
                  "modifier": null,
                  "modifiedTime": "1753-01-01T00:00:00",
                  "extends1": null,
                  "extends2": null,
                  "extends3": null,
                  "extends4": null,
                  "extends5": null,
                  "extends6": null,
                  "extends7": null,
                  "extends8": null
                },
                "parentOrgId": "od9a2123-2151-43cf-b8f0-384dbf763740"
              },
              {
                "organization": {
                  "orgCode": "测试部门2",
                  "orgName": "testdep2",
                  "isroot": false,
                  "id": "4de922a4-3b60-41f4-8fb0-931e9de79883",
                  "creater": null,
                  "createrTime": "1753-01-01T00:00:00",
                  "modifier": null,
                  "modifiedTime": "1753-01-01T00:00:00",
                  "extends1": null,
                  "extends2": null,
                  "extends3": null,
                  "extends4": null,
                  "extends5": null,
                  "extends6": null,
                  "extends7": null,
                  "extends8": null
                },
                "parentOrgId": "od9a2123-2151-43cf-b8f0-384dbf763740"
              },
              {
                "organization": {
                  "orgCode": "测试部门3",
                  "orgName": "testdep3",
                  "isroot": false,
                  "id": "bc7f9a5a-fd44-4301-a4a5-5f40726064d9",
                  "creater": null,
                  "createrTime": "1753-01-01T00:00:00",
                  "modifier": null,
                  "modifiedTime": "1753-01-01T00:00:00",
                  "extends1": null,
                  "extends2": null,
                  "extends3": null,
                  "extends4": null,
                  "extends5": null,
                  "extends6": null,
                  "extends7": null,
                  "extends8": null
                },
                "parentOrgId": "od9a2123-2151-43cf-b8f0-384dbf763740"
              }
            ]
           
      }

      data.children =[];
      data1.data.forEach(element => {
          data.children.push({
           id: element.organization.id,
           orgCode:element.organization.orgCode,
           orgName:element.organization.orgName,
           children:[]

          })
      }); 
      return data;
    
})
