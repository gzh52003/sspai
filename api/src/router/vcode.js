const express = require('express')
const router = express.Router()
const svgCaptcha = require('svg-captcha')
const { formatData } = require('../utils/tools')

//  生成验证码
router.get('/', async (req, res) => {
    //  生成图像验证码

    //  配置参数
    const options = {
        noise: 3,
        ignoreChars: '0O1il',
        background: '#ccc',
        background: "#fcf197",
        height: 50
    }

    //  生成验证码
    const captcha = svgCaptcha.create(options)


    //  把验证码存入会话Session
    req.session.vcode = captcha.text.toLowerCase()
    console.log(req.session)
    res.send(formatData({ data: captcha.data }))
})

module.exports = router