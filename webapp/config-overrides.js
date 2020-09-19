const path = require('path')
const { override, addDecoratorsLegacy, addWebpackAlias, fixBabelImports } = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy(),  //  支持装饰器

    //  添加路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/store'),
        '~': path.resolve(__dirname, 'src/views')
    }),

    //  ui框架按需加载
    fixBabelImports('import', {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css" // `style: true` 会加载 less 文件
    })
)