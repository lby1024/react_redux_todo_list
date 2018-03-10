var path = require('path')



module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'temp/'
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:2333,
        historyApiFallback: true
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react'],
                    plugins : ["transform-object-rest-spread"]
                }
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif)/ ,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        outputPath:'images/',
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [{
                       loader: "style-loader" 
                    }, {
                        loader: "css-loader" 
                    }, {
                        loader: "less-loader" 
                    }]
            }
        ]
    }
}