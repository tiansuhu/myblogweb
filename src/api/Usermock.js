import Mock from 'mockjs'

//用户登入
Mock.mock('/LoginIn', 'post', (postjs) => {
    var postjs = JSON.parse(postjs.body);

    //系统管理员
    if (postjs.code == "admin") {
        if (postjs.password == "000000") { 
            let f =
            {
                success: true,
                code: "admin",
                name: "系统管理员",
                msg: ""
            }
            return f;

        } else {
            let f = {
                success : false,
                msg: "用户密码不正确"
            }
            return f;
        }

    }

    //一般用户
    if (postjs.code == "user") {
        if (postjs.password == "000000") {

            let f = {
                success: true,
                code: "user",
                name: "普通用户"
            }
            return f;
        } else {
            let f = {
                success: false,
                code: "user",
                msg: "用户密码不正确"

            }
            return f;
        }
    }

    let f = {
        success: false,
        msg: "登录失败"

    }
    return f;

})


//