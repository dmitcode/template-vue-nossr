const path = require('path');
const route = path.join(__dirname, '../..', 'src', 'pages');

module.exports = {
    entry: {
        'index': path.join(route + '/index/index.js'),
        'note': path.join(route + '/note/note.js'),
        'editor': path.join(route + '/editor/editor.js'),
        'user': path.join(route + '/user/user.js')
    }
};
