const express = require('express')
const router = express.Router()
const { formatData } = require('../utils/tools')
const mongo = require('../utils/mongo')

// 查询商品
// api/recommend
router.get('/', async (req, res) => {
    let { page = 1, size = 100, sort = 'id', code, title } = req.query
    // 处理排序参数
    const skip = (page - 1) * size
    const limit = size * 1
    sort = sort.split(',')
    if (code) {
        let reg = new RegExp(code)
        const result = await mongo.find('hot', { id: reg }, { skip, limit, sort })
        res.send(formatData({ data: result }))
    } else if (title) {
        let reg = new RegExp(title)
        const result = await mongo.find('hot', { title: reg }, { skip, limit, sort })
        res.send(formatData({ data: result }))
    } else {
        const result = await mongo.find('hot', {}, { skip, limit, sort })
        res.send(formatData({ data: result }))
    }
})

// 查询某个商品
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const result = await mongo.find('hot', { id })
    res.send(formatData({ data: result }))
})

// 删除某个商品
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await mongo.remove('hot', { _id: id })
        res.send(formatData({ data: result }))
    } catch {
        res.send(formatData({ data: 0 }))
    }
})

// 增加商品
router.post('/', async (req, res) => {
    let { banner, title, summary, content, contentImg, author } = req.body  // author为对象,传递值也应该为对象
    let newData = { banner, title, summary, content, contentImg, author }

    try {
        const result = await mongo.insert('hot', newData)
        res.send(formatData())
    } catch {
        res.send(formatData({ code: 0 }))
    }
})

// 修改商品
router.put('/:id', async (req, res) => {
    const { id } = req.params
    let { banner, title, summary, content, contentImg, author } = req.body  // author为对象,传递值也应该为对象
    let newData = { banner, title, summary, content, contentImg, author }

    try {
        await mongo.update('hot', { _id: id }, { $set: newData })
        res.send(formatData({ data: { _id: id, ...newData } }))
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

module.exports = router