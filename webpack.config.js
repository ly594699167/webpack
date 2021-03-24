
module.exports =env =>  {
    console.log(env,'this is for you koeb')
    if(env&&env.pro ){
        return require('./webpack.pro')
    }else{
        return require('./webpack.dev')
    }
}