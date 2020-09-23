const { Router, urlencoded, json} = require('express')
const router = Router()
const session = require('express-session')
const token = require('../utils/token')
const cors = require('../filter/cors')
const {formatData} = require('../utils/tools')

const vcodeRouter = require('./vcode')
const userRouter = require('./user')
const loginRouter = require('./login')
const regRouter = require('./reg')
const recommendRouter = require('./recommend')
const forgetRouter = require('./forget')

// CORS跨域
router.use(cors)

// 数据格式化中间件
router.use(urlencoded({ extended: false }), json())

// 使用session会话
// 通过req.session获取存储会话中的数据
router.use(session({
    secret: 'sspai',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // 设置cookie有效期 2小时
        maxAge: 1000 * 60 * 60 * 2
    }
}))

// 校验token
router.get('/jwtverify', (req, res) => {
    const {authorization} = req.query
    if (token.verify(authorization)) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 0 }))
    }
})

// 验证码 /api/vcode
router.use('/vcode', vcodeRouter)

// 用户 /api/user
router.use('/user', userRouter)

// 登录 /api/login
router.use('/login', loginRouter)

// 注册 /api/reg
router.use('/reg', regRouter)

// 推荐 /api/reommend
router.use('/recommend',recommendRouter)

// 忘记密码 /api/forget
router.use('/forget', forgetRouter)

module.exports = router