const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.base.config.js');

webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error('build error!');
        if (err && err.details) {
            console.error(err.details);
        } else if (stats.hasErrors()) {
            console.log(stats);
        }
        process.exit(-1);
    }
});