const express = require('express')
const router = express.Router()
const { formatData, md5 } = require('../utils/tools')
const mongo = require('../utils/mongo')
const token = require('../utils/token')

//  登录
router.get('/', async (req, res) => {
    let { username, password, vcode, mdl } = req.query

    //  从会话中获取验证码并交校验
    console.log("vcode:", vcode, req.session)
    if (vcode !== req.session.vcode) {
        res.send(formatData({ code: 10 }))
        return
    }



    //  密码加密
    password = md5(password)

    let result = await mongo.find('user', { username, password })
    if (result.length > 0) {
        let authorization
        if (mdl === "true") {
            authorization = token.create({ username }, "7d")
        } else {
            authorization = token.create({ username })
        }
        result = result[0]
        result.authorization = authorization
        console.log(result)
        res.send(formatData({ data: result }))
    } else {
        res.send(formatData({ code: 0 }))
    }
})

module.exports = router