import type { StorybookConfig } from '@storybook/react-vite'

// Defining the Storybook configuration object
const config: StorybookConfig = {
  // Specifying the files to be considered as stories (using glob patterns)
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  // Adding various Storybook addons for additional functionality
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-a11y',
  ],

  // Configuring the framework used in the Storybook (React with Vite)
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // Configuring the documentation generation for Storybook
  docs: {
    autodocs: 'tag', // Specifies how to generate documentation, in this case using tags
  },
}

export default config
