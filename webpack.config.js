const HtmlWebpackPlugin = require("html-webpack-plugin");


// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require("path");

module.exports= {
    entry:"./src/js/index.js",
    output:{
        filename:"index[contenthash].js", //имя файла сброки
        path:path.resolve(__dirname,'build'),//путь сборки
        clean:true //удаление других файлов сборки
    },
    module: {
        rules: [{
                    test: /\.(png|jpe?g|webp|git|svg|)$/i,
                    use: [{
                        loader: 'img-optimize-loader',
                    }, ],
                },
            {
                test: /\.css$/i,
                use: ["style-loader", 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", 'css-loader','sass-loader'],
            },
            {
                test: /\.mp3$/i,
                use: [{
                    loader:'file-loader'
                }
                ],
            }
             
        ]
    },
    plugins:[new HtmlWebpackPlugin(
        {template: path.resolve(__dirname,'src','index.html')}
        ),
       
        
        
        // new MiniCssExtractPlugin({}),
        //  new BundleAnalyzerPlugin()
    ],
}

