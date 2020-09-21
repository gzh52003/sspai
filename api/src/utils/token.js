const jwt = require('jsonwebtoken')

// 私钥
const privateKey = 'sspai'

// 创建token
function create(data = {},expiresIn = '2h') {
    const token = jwt.sign({...data}, privateKey,{
        expiresIn
    })
    return token
}

// 验证token
// verify方法校验成功：得到一个对象
// verify方法校验不通过：直接抛出错误
function verify(token) {
    let result
    try {
        jwt.verify(token, privateKey)
        result = true
    }catch (err) {
        result = false
    }
    return result
}

// 导出
module.exports = {
    create,
    verify
}