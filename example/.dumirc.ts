import { defineConfig } from 'dumi';

import { description, keywords, author } from './package.json';
console.log('process.env.gh', process.env.gh);

function withGH(uri: string): string {
  const prefix = process.env.gh ? '/dumi-theme-chakra/' : '/';
  return [prefix, uri].join('');
}

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  base: withGH(''),
  publicPath: withGH(''),
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' }
  ],
  sitemap: {
    hostname: 'https://dumi-theme-chakra.deno.dev'
  },
  clickToComponent: {},
  codeSplitting: {
    jsStrategy: 'granularChunks'
  },
  // pass theme config
  themeConfig: {
    name: 'Chakra Theme',
    logo: withGH('dumi-theme-chakra-logo.png'),
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
