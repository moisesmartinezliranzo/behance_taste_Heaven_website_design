const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
        ],
    },
};