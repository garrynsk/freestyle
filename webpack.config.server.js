const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './src/index'
    ],
    watch: true,
    target: 'node',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    mode: 'development',
    plugins: [
        new StartServerPlugin('server.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    output: {
        path: path.join(__dirname, '.build'),
        filename: 'server.js'
    }
}