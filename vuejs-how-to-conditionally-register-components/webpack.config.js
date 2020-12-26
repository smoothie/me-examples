const Encore = require('@symfony/webpack-encore');
const path = require('path');

Encore
    .setOutputPath('public/assets/')
	.setPublicPath('/assets/')
	.setManifestKeyPrefix('./')
    .addEntry(`js/application`, `./resources/js/application.js`)
    .cleanupOutputBeforeBuild([
        'js/**/*',
        'css/**/*',
    ])
    .enableSingleRuntimeChunk() // optional: in case webpack should chunk dependencies into smaller parts use `disableSingleRuntimeChunk()`.
    .enableSourceMaps(! Encore.isProduction())
    .enableVueLoader()
;

const config = Encore.getWebpackConfig();

if (Encore.isDevServer()) {
    config.devServer.contentBase = path.join(__dirname, 'public/');
}

module.exports = config;
