const Plugin = require('./plugin')
module.exports = {
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'./loader.js'
            }
        ]
    },
    plugins:[
        new Plugin(),
    ]
}