module.exports = {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'less-loader', // compiles Less to CSS
       options: {
        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置。
          modifyVars: {
          'primary-color': '#055B5C',
          'link-color': '#A8B293',
           'border-radius-base': '2px',
         },
          javascriptEnabled: true,
         },
      },
      }],
      // ...other rules
    }],
    // ...other config
  }