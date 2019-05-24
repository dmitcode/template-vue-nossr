module.exports = {
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },
                    {
                        use: [
                            {loader: 'raw-loader'},
                            {loader: 'pug-html-loader',
                                options: {
                                    pretty: true
                                }
                            }
                        ],
                    }
                ]
            }
        ]
    }
};
