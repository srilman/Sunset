const commonConfig = require('./webpack.common');
const config = require('./config');

const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge([commonConfig,
    {
        output: {
            publicPath: config.prod.publicPath,
        },
        performance: {
            hints: 'warning',
            maxAssetSize: 450000,
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: ({ resource }) => /node_modules/.test(resource),
            })
        ],
    },
]);
