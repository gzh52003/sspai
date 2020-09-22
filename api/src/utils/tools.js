const crypto = require('crypto')

function formatData({ code = 1, data = [], msg = 'success' } = {}) {
    if (code === 0) {
        msg = 'fail'
    }
    return {
        code,
        data,
        msg
    }
}

function md5(data, privateKey = 'sspai') {
    const hash = crypto.createHash('md5')
    hash.update(data + privateKey)
    const result = hash.digest('hex')
    return result
}

module.exports = {
    formatData,
    md5
}