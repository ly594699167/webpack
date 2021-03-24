const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports  = {
    mode:'development',
    devtool:'source-map',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"practice/[name].[hash:5].js"
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new CopyPlugin({
            patterns:[
                {
                    from:'css',
                    to:'css'
                }
            ]
        })
    ]
}