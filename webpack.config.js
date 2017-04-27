var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports={
    context:__dirname,
    devtool: 'eval-source-map',
    entry:__dirname + '/src/app.js',
    output:{
        path:__dirname +'/dist',
        filename:'js/[name]-bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',      //语法转换
                exclude:path.resolve(__dirname , 'node_modules'),    //排除范围
                include:path.resolve(__dirname , 'src'),
                query: {
                    "presets": ["latest"]
                }
            },
            {
                test:/\.html$/,
                loader: 'html-loader'
            },
            {
                test:/\.css$/,
                loader: 'style-loader!css-loader?importLoader=1!postcss-loader'
            },
            {
                test:/\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader: 'url-loader'
            }
        ]
    },

    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',//生成指定文件名'index-[hash].html'  加hash值的文件名
            template:'index.html',//模版html文件
            inject:'body',    //脚本放在指定位置head/body／false
            title:'Webpack is good',    //需要传递的参数
        }),

    ]
}