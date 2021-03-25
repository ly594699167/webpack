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
    module:{
        // rules:[{
        //     test:/\.(jpg)|(png)$/,
        //     use:{
        //         loader:'file-loader'
        //     }
        // }]
        rules:[{
            test:/\.(jpg)|(png)$/,
            use:{
                loader:'url-loader'
            }
        }]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'text.html'
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:'./public',
                    to:'./',
                }
            ]
        })
    ]
}