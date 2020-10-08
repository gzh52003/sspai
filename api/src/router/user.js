const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const { formatData, md5 } = require('../utils/tools')

// 查询用户数据
router.get('/', async (req, res) => {
    let { page = 1, size = 10000, sort = 'age', code, name } = req.query
    const skip = (page - 1) * size
    const limit = size * 1

    // 处理排序参数
    sort = sort.split(',')
    if (code) {
        let reg = new RegExp(code)
        const result = await mongo.find('user', { phone: reg }, { skip, limit, sort })
        res.send(formatData({ dara: result }))
    } else if (name) {
        let reg = new RegExp(name)
        const result = await mongo.find('user', { username: reg }, { kip, limit, sort })
        res.send(formatData({ data: result }))
    } else {
        const result = await mongo.find('user', {}, { skip, limit, sort })
        res.send(formatData({ data: result }))
    }
})

// 查找某个商品
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = await mongo.find('user', { _id: id })
    res.send(formatData({ data: result }))
})

// 删除数据
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await mongo.remove('user', { _id: id })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 修改数据
router.put('/:id', async (req, res) => {
    const { id } = req.params
    let { username, age, gender, phone, address, birthday } = req.body
    // age = age.toString()
    // phone = phone.toString()
    let newData = { username, age, gender, phone, address, birthday }
    try {
        if (dynamics) {
            await mongo.update('user', { _id: id }, { $addToSet: { dynamic: dynamics } })
        } else {
            await mongo.update('user', { _id: id }, { $set: newData })
        }

        res.send(formatData({ data: { _id: id, ...newData } }))
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

// 添加用户
router.post('/', async (req, res) => {
    let { username, password, gender, age } = req.body
    password = md5(password)
    console.log(username, password)
    // age = age.toString()
    try {
        const result = await mongo.insert('user', { username, password, gender, age })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

module.exports = router
