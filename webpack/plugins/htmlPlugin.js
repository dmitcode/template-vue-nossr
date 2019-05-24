const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const route = path.join(__dirname, '../..', 'src', 'pages');

module.exports = {
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            chunks: ['index', 'common'],
            template: path.join(route + '/index/index.pug')
        }),
        new HtmlPlugin({
            filename: 'note.html',
            chunks: ['note', 'common'],
            template: path.join(route + '/note/note.pug')
        }),
        new HtmlPlugin({
            filename: 'editor.html',
            chunks: ['editor', 'common'],
            template: path.join(route + '/editor/editor.pug')
        }),
        new HtmlPlugin({
            filename: 'user.html',
            chunks: ['user', 'common'],
            template: path.join(route + '/user/user.pug')
        }),
    ]
};
