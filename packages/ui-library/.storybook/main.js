const path = require('path');
module.exports = {
  stories: [
    "../element/**/*.stories.mdx",
    "../element/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@images': path.resolve(__dirname, '../assets/images'),
      '@videos': path.resolve(__dirname, '../assets/videos'),
      '@fonts': path.resolve(__dirname, '../assets/fonts'),
      '@styles': path.resolve(__dirname, '../styles'),
      '@utils': path.resolve(__dirname, '../utils')
    };
    return config;
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  framework: "@storybook/react",
};
