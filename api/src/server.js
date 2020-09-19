const express = require('express')
const { PORT } = require("./config.json")
const rootRouter = require("./router")

//  创建一个服务器
const app = express()

//  数据接口
app.use('/api', rootRouter)

app.listen(PORT, () => {
    console.log('server is runing on port' + PORT)
})