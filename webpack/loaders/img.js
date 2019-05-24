module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name]-[hash:base64:6].[ext]',
                            publicPath: './img',
                            outputPath: 'img',
                        }
                    }
                ]
            },
        ],
    },
};
