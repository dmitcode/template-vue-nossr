const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require('postcss-normalize');

module.exports = (devMode) => {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: './css/[name].css'
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    postcssNormalize("last 3 versions")
                                ]
                        }   },
                        'sass-loader'
                    ],
                }
            ]
        }
    };
};

