const path = require('path');

const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: [
        './index-web.js',
      ],    
    output: {
        path: path.resolve('./static/web'),
        filename: 'web-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ]
}