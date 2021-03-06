module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/theming',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        'storybook-dark-mode',
        'storybook-color-picker',
    ],
};