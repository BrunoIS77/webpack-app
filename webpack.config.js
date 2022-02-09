const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development', //Indica si estamos en modo de desarrollador o en modo produccion
    output: {clean:true},
    module: {
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Mi Webpack App',
            filename: 'main.html'
        })
    ]
}