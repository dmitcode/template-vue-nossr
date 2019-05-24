const webpack = require('webpack');
const merge = require('webpack-merge');
const output = require('./parts/output');
const entry = require('./parts/entry');
const htmlPlugin = require('./plugins/htmlPlugin');
const devServer = require('./presets/devServer');
const optimization = require('./presets/optimization');
const babel = require('./loaders/babel');
const pug = require('./loaders/pug');
const style = require('./loaders/style');
const img = require('./loaders/img');
const vue = require('./loaders/vue');

module.exports = (env, options) => {
    const devMode = options.mode !== 'production';
    let common = [
        output,
        entry,
        babel,
        pug,
        style(devMode),
        img,
        vue,
        htmlPlugin
    ];
    if (devMode) {
        return merge([
            common,
            devServer
        ]);
    } else {
        return merge([
            common,
            optimization
        ]);
    }
};
