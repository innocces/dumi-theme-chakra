import { defineConfig } from 'dumi';

import { description, keywords, author } from './package.json';

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' }
  ],
  // pass theme config
  themeConfig: {
    name: 'chakra theme',
    logo: '/dumi-theme-chakra-logo.png',
    helmetIcon: '🍺',
    description,
    keywords,
    author,
    social: {
      github: {
        name: 'dumi-theme-chakra',
        link: 'https://github.com/innocces/dumi-theme-chakra'
      },
      discord: {
        name: 'maryoku-ui-discord',
        link: 'https://discord.gg/N82HK72uJk'
      }
    },
    search: {
      type: 'docsearch',
      config: {
        appId: 'xxxx'
      }
    },
    announcementBar: {
      id: 'announce current progress info',
      content: 'dumi-theme-chakra: use Chakra-UI buildIn for Dumi2',
      isCloseable: true
    }
  }
});
