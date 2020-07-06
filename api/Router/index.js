const express = require('express')

let Router = express.Router()
//CORS跨域
//把这个路由配置放在所有路由的前面，方便调用next操作
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

// 引入Router里面的模块
// let goodsRouter = require('./goods')
// let regRouter = require('./user')


// Router.use('/goods', goodsRouter)
// Router.use('/user', regRouter)

Router.use(express.json(), express.urlencoded())

module.exports = Router