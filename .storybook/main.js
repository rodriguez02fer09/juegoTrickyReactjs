import { mergeConfig } from 'vite';

export default {
  // Replace your-framework with the framework you are using (e.g., react-vite, vue3-vite)
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-interactions', // 👈 Register the addon
  ],
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
};