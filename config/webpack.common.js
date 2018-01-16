const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, config.common.sourceRoot, config.common.entryFile),
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: config.common.distRoot,
        filename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: path.resolve(__dirname, config.common.sourceRoot),
                use: {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        babelCore: "@babel/core",
                        useCache: true,
                    }
                }
            },
            {
                test: /\.js(x?)$/,
                include: [
                    path.resolve(__dirname, config.common.sourceRoot),
                ],
                use: {
                    loader: 'babel-loader',
                    options: { cacheDirectory: true },
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff',
                        name: 'fonts/[name].[hash:8].[ext]',
                    },
                },
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/octet-stream',
                        name: 'fonts/[name].[hash:8].[ext]',
                    },
                },
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:8].[ext]',
                    },
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash:8].[ext]',
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 15000,
                        name: 'images/[name].[hash:8].[ext]'
                    }
                },
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.WatchIgnorePlugin([
            /scss\.d\.ts$/
        ]),
        new CheckerPlugin(),
    ],
};
