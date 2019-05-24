const ip = require("ip");

module.exports = {
    devServer: {
        host: ip.address(),
        stats: 'errors-only',
        port: 9877
    }
};
