const express = require('express')
const router = express.Router()
const { formatData, md5 } = require('../utils/tools')
const mongo = require('../utils/mongo')

//  注册
router.post('/', async (req, res) => {
    let { username, password } = req.body
    password = md5(password)
    try {
        const result = await mongo.insert('user', { username, password })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 判断用户是否已经注册
router.get('/checkname', async (req, res) => {
    const { username } = req.query
    const result = await mongo.find('user', { username })
    if (result.length > 0) {
        res.send(formatData({ code: 0 }))
    } else {
        res.send(formatData())
    }
})

module.exports = router