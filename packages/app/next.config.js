const withPlugins = require("next-compose-plugins");
const { withExpo } = require("@expo/next-adapter");
const withTM = require("next-transpile-modules");

const tmPlugin = withTM(["@my-scope/core"], { debug: true });

module.exports = withPlugins(
  [tmPlugin, [withExpo, { projectRoot: __dirname + "/../../" }]],
  {}
);
