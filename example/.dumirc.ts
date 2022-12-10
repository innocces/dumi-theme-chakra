import { defineConfig } from 'dumi';

import { description, keywords, author } from './package.json';
console.log('process.env.gh', process.env.gh);

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  base: process.env.gh ? '/dumi-theme-chakra/' : '/',
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' }
  ],
  sitemap: {
    hostname: 'https://dumi-theme-chakra.deno.dev'
  },
  // pass theme config
  themeConfig: {
    name: 'Chakra Theme',
    logo: '/dumi-theme-chakra-logo.png',
    helmetIcon: '🍺',
    settingPanelVisible: true,
    thumbBackground: true,
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
    hero: {
      showVersionBadge: true
    },
    announcementBar: {
      id: 'announce current progress info',
      content: 'dumi-theme-chakra: use Chakra-UI buildIn for Dumi2',
      isCloseable: true
    },
    footer: `Copyright © ${new Date().getFullYear()} Dumi-Theme-Chakra.Innocces`
  }
});
