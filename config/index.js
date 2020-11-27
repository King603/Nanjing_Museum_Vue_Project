'use strict'
/**
 * @version 1.3.1
 * @see http://vuejs-templates.github.io/webpack for documentation.
 */

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // 各种Dev服务器设置
    host: 'localhost', // 用 process.env.HOST 覆盖
    port: 8080, // 用 process.env.PORT 覆盖，如果端口正在使用，则将确定空闲端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, /** @see https://webpack.js.org/configuration/dev-server/#devserver-watchoptions- */

    // 使用 Eslint Loader
    // 如果为真，您的代码将在绑定期间被linting，并且linting错误和警告将显示在控制台中。
    useEslint: true,
    // 如果为真，eslint错误和警告也会显示在浏览器的错误覆盖层中。
    showEslintErrorsInOverlay: false,

    /* Source Maps */
    /** @see https://webpack.js.org/configuration/devtool/#development */
    devtool: 'cheap-module-eval-source-map',

    /**
     * 如果在devtools中调试vue文件有问题，将其设置为false——可能会有帮助
     * @see https://vue-loader.vuejs.org/en/options.html#cachebusting
     */
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /* Source Maps */

    productionSourceMap: true,
    /**@see https://webpack.js.org/configuration/devtool/#production */
    devtool: '#source-map',

    /**
     * 默认情况下，许多流行的静态主机，如Surge或Netlify已经为你Gzip所有静态资产。在设置为true之前，请确保:
     * npm install --save-dev compression-webpack-plugin
     */
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    /**
     * 在构建完成后，运行带有额外参数的构建命令来查看bundle analyzer报告:
     * `npm run build --report`
     * 设置为 true 或 false 总是打开或关闭它
     */
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
