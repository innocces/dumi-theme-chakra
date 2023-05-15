import { defineConfig } from 'dumi';
import { defineThemeConfig } from './.dumi/theme';

import { description, keywords, author } from './package.json';

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
  devtool: 'cheap-module-source-map',
  // sitemap: {
  //   hostname: 'https://dumi-theme-chakra.deno.dev'
  // },
  esbuildMinifyIIFE: true,
  // all in one to fix ConfigProvider error
  codeSplitting: {
    jsStrategy: 'bigVendors'
  },
  // ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts'
  },
  alias: {
    example: require.resolve('./src/index.ts')
  },
  clickToComponent: {},
  // pass theme config
  themeConfig: {
    // https://github.com/umijs/dumi/issues/1655
    nprogress: false,
    name: 'Chakra Theme',
    logo: withGH('dumi-theme-chakra-logo.png'),
    ...defineThemeConfig({
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
          appId: 'CQNSFVVYJA',
          apiKey: '2c50fefc041d570e018d5d9f569086b7',
          indexName: 'dumi-theme-chakra'
        }
      },
      hero: {
        showVersionBadge: true
      },
      announcementBar: {
        id: 'announce current progress info',
        content: 'dumi-theme-chakra: use Chakra-UI buildIn for Dumi2',
        isCloseable: true
      }
    }),
    footer: `Copyright © ${new Date().getFullYear()} Dumi-Theme-Chakra.Innocces`
  }
});
