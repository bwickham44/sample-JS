const path = require('path');

const config = {
    entry: {
        sample: './src/js/sample.js'
    },
    output: {
        path: path.resolve(__dirname, 'static/js/'),
        filename: '[name].bundle.js'
    }
};

module.exports = config;
