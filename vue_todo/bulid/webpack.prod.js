const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')

const prodConfig ={
    mode:"producton",//开发环境

}
module.exports = merge(baseConfig,prodConfig)