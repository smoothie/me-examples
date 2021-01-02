const Encore = require('@symfony/webpack-encore');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const path = require('path');

Encore
    .setOutputPath('public/assets/')
	.setPublicPath('/assets/')
	.setManifestKeyPrefix('./')
    .cleanupOutputBeforeBuild([
        'js/**/*',
        'css/**/*',
    ])
    .enableSassLoader()
    .addStyleEntry(`css/application`, `./resources/scss/application.scss`)
    .enableSingleRuntimeChunk() // optional: in case webpack should chunk dependencies into smaller parts use `disableSingleRuntimeChunk()`.
;

// To reduce time and resources only download assets when bundled for production.
if (Encore.isProduction()) {
    Encore
        .addPlugin(new GoogleFontsPlugin({
            filename: '/fonts/fonts.css',
            path: '../fonts',
            formats: [ 'woff2' ],
            fonts: [
                {
                    family: 'Poppins',
                },
                {
                    family: 'Mulish',
                    variants: [
                        '200',
                        'regular',
                    ],
                },
            ]
        }))
}

const config = Encore.getWebpackConfig();

if (Encore.isDevServer()) {
    config.devServer.contentBase = path.join(__dirname, 'public/');
}

module.exports = config;
