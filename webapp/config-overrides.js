const path = require('path')
const { override, addDecoratorsLegacy, addWebpackAlias, fixBabelImports } = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy(),  //  支持装饰器

    //  添加路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/components'),
        '~': path.resolve(__dirname, 'src/views')
    }),

    //  ui框架按需加载
    fixBabelImports('import', {
        "libraryName": 'antd-mobile',
        "style": 'css',
    }),
)