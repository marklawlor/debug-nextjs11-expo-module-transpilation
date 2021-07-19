const withPlugins = require('next-compose-plugins');
const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const { dependencies } = require('./package.json');

const dependenciesToTranspile = Object.keys(dependencies || []).filter(dependency => dependency.startsWith('@my-scope/'));
const tmPlugin = withTM(dependenciesToTranspile, { debug: true});

const defaultPluginsConfig = { 
    projectRoot: __dirname,
};

module.exports = withPlugins([
    tmPlugin,
    [withFonts, defaultPluginsConfig],
    [withImages, { ...defaultPluginsConfig, inlineImageLimit: false }],
    [withExpo, defaultPluginsConfig],
], defaultPluginsConfig);
