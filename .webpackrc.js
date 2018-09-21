const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    'transform-decorators-legacy',
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    // 配置文件别名
    'components': path.resolve(__dirname, 'src/components/'),
    'theme': './src/theme.js',
  },
  ignoreMomentLocale: true,
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  proxy: {
    '/dev': {
      target: 'http://35.194.239.183:443',
      'changeOrigin': true,
    },
    "/fxsb": {
      "target": "http://172.16.13.244:9528",
      "changeOrigin": true
    },
  },
};
