module.exports = {
  stories: ['../src/**/*.stories.*'],
  hierarchyRootSeparator: '|',
  hierarchySeparator: /\/|\./,
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
};
