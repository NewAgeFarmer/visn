// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

 const UglifyJsPlugin = require("uglifyjs-webpack-plugin")    //引入插件

module.exports = {
    // publicPath: './',
    lintOnSave: false,
    pages: {
      index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
      }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
      config.module
        .rule('js')
        .include
          .add('/packages')
          .end()
        .use('babel')
          .loader('babel-loader')
    },
    //webpack 配置
    configureWebpack: config => {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              // 删除注释，正则保留合法注释 **license/i**
              output:{
                comments: /@license/i,
              },
              // 删除console debugger 删除警告
              compress: {
                warnings: false,
                drop_console: true, //console
                drop_debugger: false,
                pure_funcs: ['console.log'] //移除console
              }
            }
          })
        ]
      }
      // const plugins = [];
      // //去掉不用的css 多余的css
      // plugins.push(
      //   new PurgecssPlugin({
      //     paths: glob.sync([path.join(__dirname, "./**/*.vue")]),
      //     extractors: [
      //       {
      //         extractor: class Extractor {
      //           static extract(content) {
      //             const validSection = content.replace(
      //               /<style([\s\S]*?)<\/style>+/gim,
      //               ""
      //             );
      //             return validSection.match(/[A-Za-z0-9-_:/]+/g) || [];
      //           }
      //         },
      //         extensions: ["html", "vue"]
      //       }
      //     ],
      //     whitelist: ["html", "body"],
      //     whitelistPatterns: [/el-.*/],
      //     whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
      //   })
      // );
      // //启用代码压缩
      // plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         warnings: false,
      //         drop_console: true,
      //         drop_debugger: false,
      //         pure_funcs: ["console.log"] //移除console
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true
      //   })
      // ),
      //   //代码压缩打包
      //   plugins.push(
      //     new CompressionWebpackPlugin({
      //       filename: "[path].gz[query]",
      //       algorithm: "gzip",
      //       test: productionGzipExtensions,
      //       threshold: 10240,
      //       minRatio: 0.8
      //     })
      //   );
      // config.plugins = [...config.plugins, ...plugins];
    },
}