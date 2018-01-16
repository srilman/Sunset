const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const DashboardPlugin = require('webpack-dashboard/plugin');

const commonConfig = require('./webpack.common');
const config = require('./config');

const host = process.env.HOST || config.dev.host;
const port = process.env.PORT || config.dev.port;

module.exports = () => merge.smart([commonConfig,
    {
        devServer: {
            historyApiFallback: {
                verbose: true,
                disableDotRule: false,
            },
            compress: true,
            contentBase: config.common.sourceRoot,
            headers: { 'Access-Control-Allow-Origin': '*' },
            //stats: 'errors-only',
            open: process.env.OPEN_START || false,
            hotOnly: true,
            host,
            port,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, config.common.sourceRoot),
                    use: [
                        'style-loader',
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                sourceMap: true,
                                namedExport: true,
                                camelCase: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: false,
                template: require('html-webpack-template'),
                appMountId: 'mount',
                mobile: true,
                devServer: `http://${host}:${port}`,
                meta: [{
                    name: 'description',
                    content: 'A better default template for html-webpack-plugin.',
                }],
                title: 'Webpack Demo',
                scripts: [{
                    src: 'https://apis.google.com/js/api.js',
                    async: true,
                    defer: true,
                }],
            }),
            //new DashboardPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
        ],
    },
]);
