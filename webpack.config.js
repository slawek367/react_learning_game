const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => ({
    entry: './src/index.jsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'],
                    plugins: [
                        ['import', { libraryName: 'antd', style: true }],
                    ],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                    },
                    {loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'layout-body-background': '#fff',
                                'layout-header-background': '#fff',
                                'layout-header-padding': '0px',
                            },
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug',
                ],
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 5111,
        publicPath: 'http://localhost:5111/dist/',
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: `.env.${argv.mode === 'production' ? 'prod' : (argv.mode === 'development' ? 'test' : 'local')}`,
            safe: true,
        }),
    ],
});
