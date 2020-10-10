const express = require('express')
const router = express.Router()
const { formatData, md5 } = require('../utils/tools')
const mongo = require('../utils/mongo')
const token = require('../utils/token')

//  登录
router.get('/', async (req, res) => {
    let { phone, password } = req.query


    //  密码加密
    password = md5(password)

    console.log(phone, password)
    let result = await mongo.find('user', { phone, password })
    if (result.length > 0) {
        let authorization = token.create({ phone })
        result = result[0]
        result.authorization = authorization
        console.log(result)
        res.send(formatData({ data: result }))
    } else {
        res.send(formatData({ code: 0 }))
    }
})

module.exports = router