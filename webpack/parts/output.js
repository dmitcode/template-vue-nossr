const path = require('path');
const route = path.join(__dirname, '../..', 'dist');

module.exports = {
    output: {
        path: route,
        filename: 'js/[name].js?[hash]'
    }
};
