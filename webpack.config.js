const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
var webpack = require('webpack')

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|JPG|jpeg|gif|pdf|mov)$/,
                use: [
                    {
                        loader: "file-loader",
                        /* options: {
                            name: '[name].[ext]'
                        }   */
                    }
                    
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // fallback to style-loader in development
                    /* process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    :  */
                    MiniCssExtractPlugin.loader,
                    //"style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/about.html",
            filename: "./about.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/program-of-study.html",
            filename: "./program-of-study.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/sccs-exp.html",
            filename: "./sccs-exp.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/mentoring-advising.html",
            filename: "./mentoring-advising.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/area-of-specialization.html",
            filename: "./area-of-specialization.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin ([{
            from: 'src/static', to: 'static'
        }]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new webpack.ProvidePlugin({
            TimelineMax: "gsap",
            Expo: "gsap"
        })
    ]
}