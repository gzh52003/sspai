
// MongoDB 操作封装

const { MongoClient, ObjectId } = require('mongodb')

// mongodb 数据库地址
const url = 'mongodb://localhost:27017'

// 数据库名称
const dbName = 'sspai'

async function connect() {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true })
    const db = client.db(dbName)
    return { client, db }
}

// 增
async function insert(colName, data) {
    // 连接数据库
    const { db, client } = await connect()
    // 添加数据
    const collection = db.collection(colName)
    // 判断传入的数据是单个还是多个
    const result = await collection[Array.isArray(data) ? 'insertMany' : 'insertOne'](data)
    // 关闭连接
    client.close()
    return result
}


// 删
async function remove(colName, query) {
    const { db, client } = await connect()
    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }

    const collection = db.collection(colName)
    const result = await collection.deleteMany(query)

    client.close()
    return result
}
// 批量删除
async function removes(colName, query) { // query{_id:'5c128cdbd1233ce12c878a32'}
    const { db, client } = await connect()
    if (query._id && typeof query._id === "string") {
        query._id = ObjectId(query._id)
    }

    const collection = db.collection(colName)
    const result = await collection.update(query)

    client.close()
    return result
}

//  改
async function update(colName, query, newData) { // newData{$set:{price:200,qty:2}
    const { db, client } = await connect()

    if (query._id && typeof query._id === "string") {
        query._id = ObjectId(query._id)
    }

    const collection = db.collection(colName)


    const result = await collection.updateMany(query, newData)

    client.close()

    return result
}

// 查
async function find(colName, query = {}, options = {}) {
    const { db, client } = await connect()
    const collection = db.collection(colName)

    if (query._id && typeof query._id === 'string') {
        query._id = ObjectId(query._id)
    }
    if (query.id && typeof query.id === 'string') {
        query.id = Number(query.id)
    }

    //  查询到数据集合
    const opt = {}
    if (options.field) {
        opt.projection = options.field
    }
    console.log(query)
    let result = collection.find(query, opt)

    //  判断是否跳过数据
    if (options.skip) {
        result = result.skip(options.skip)
    }
    if (options.limit) {
        result = result.limit(options.limit)
    }

    //  是否排序
    if (options.sort) {
        let key, val
        key = options.sort[0]
        if (options.sort.length > 1) {
            val = options.sort[1] * 1
        } else {
            val = -1
        }
        result = result.sort({
            [key]: val
        })
    }
    result = await result.toArray()
    client.close()

    return result
}


// 导出
module.exports = {
    insert,
    remove,
    removes,
    update,
    find
}