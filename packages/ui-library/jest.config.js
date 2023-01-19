//for jest to run in this package, this file is necessary

const sharedConfig = require("jest-config-custom");

const jestConfig = {
  ...sharedConfig,
};

module.exports = jestConfig;
