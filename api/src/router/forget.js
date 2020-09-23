const express = require('express')
const router = express.Router()
const { formatData, md5 } = require('../utils/tools')
const mongo = require('../utils/mongo')

// 用户名验证
router.get('/check', async (req, res) => {
    let {username,phone} = req.query
    let data = {}
    if (phone) {
        data = {phone}
    }else if (username) {
        data = {username}
    }
    console.log(username, phone)
    console.log(data)
    const result = await mongo.find('user',data)
    if (result.length > 0 ){
        res.send(formatData())
    }else{
        res.send(formatData({ code: 0}))
    }
})

// 新密码
router.put('/:username', async(req, res) => {
    const {username} = req.params
    let {password} = req.body
    password = md5(password)
    let newData = {password}
    console.log(newData)
    try {
        await mongo.update('user', {username: username}, {$set: newData})
        res.send(formatData({data: {username: username, ...newData}}))
    } catch (err) {
        res.send(formatData({code: 0}))
    }

})

module.exports = router