const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
    entry: PATHS.app,

    // allow imports without extensions
    resolve: {
        extensions: ['','.js','.jsx']
    },

    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'node_modules/html-webpack-template/index.html',
            title: 'Kanban app',
            appMountId: 'app'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app
            }
        ]
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accep'
            }
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        //devtool: 'eval-source-map' // must enable sourcemaps in browser
        devtool: 'eval' // most suitable for large projects
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}
