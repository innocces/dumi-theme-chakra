<p align="center">
  <a href="https://dumi-chakra.deno.dev" target="_blank" rel="noopener noreferrer">
    <img style="max-width: 100%" src="https://cdn.jsdelivr.net/gh/innocces/dumi-theme-chakra/src/media/dumi-theme-chakra.png" alt="dumi-theme-chakra logo" />
  </a>
  <br />
  <h3 align="center">
  <span>
    <a href="./README.md">英文</a> | 
    <a>中文</a>
  </span>
  <h3>
</p>
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/dumi-theme-chakra"><img src="https://img.shields.io/npm/v/dumi-theme-chakra" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/dumi-theme-chakra" alt="node compatibility"></a>
  <a href="https://github.com/innocces/dumi-theme-chakra/actions/workflows/deploy-deno.yml"><img src="https://github.com/innocces/dumi-theme-chakra/actions/workflows/deploy-deno.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://discord.gg/N82HK72uJk"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br />
<div align="center">
  <p>基于 Chakra-UI 的 dumi2 主题<p>
</div>

## Usage

```bash
# npm
$ npm i dumi-theme-chakra -D
# yarn
$ yarn add dumi-theme-chakra -D
# pnpm
$ pnpm add dumi-theme-chakra -D
```

## Configure

在 dumi 的配置文件 `.dumirc.ts` 中配置主题相关

```ts
import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export defineConfig({
  themeConfig: {
    ...defineThemeConfig({
      // ...
    })
  },
});
```

## Options

```tsx
export type ThemeConfig = DocProviderProps & {
  /**
   * @description.zh-CN 社交配置: 比如 github & discord
   */
  social?: SocialMap;
  /**
   * @description.zh-CN 自动生成的title分隔符: 格式为: ${themeConfig.title} ${helmetIcon} ${subTitle}
   */
  helmetIcon?: string;
  /**
   * @description.zh-CN 自定义header meta 描述信息
   */
  description?: string;
  /**
   * @description.zh-CN 自定义header meta 关键字
   */
  keywords?: string[];
  /**
   * @description.zh-CN 自定义header meta 作者
   */
  author?: string;
  /**
   * @description.zh-CN 是否使用搜索. 若为布尔值则表示开启或关闭. 也可以使用对象来配置更多
   * @default true
   */
  search?: boolean | Search;
  /**
   * @description.zh-CN 文档头部声明条幅配置
   */
  announcementBar?: AnnouncementBarConfig;
  /**
   * @description.zh-CN 首页的hero配置
   */
  hero?: HeroConfig;
  /**
   * @description.zh-CN 文档背景图片. 如果为布尔值, 使用默认背景图片
   * @default false
   */
  thumbBackground?: boolean | string;
  /**
   * @description.zh-CN 是否展示主题设置面板
   * @default false
   */
  settingPanelVisible?: boolean;
  /**
   * @description.zh-CN <SourceCode /> 组件配置
   */
  code?: {
    /**
     * @description.zh-CN prism themes
     * @default { dark: PRISMTHEME.VSDARK, light: PRISMTHEME.VSLIGHT }
     */
    theme?: CodeTheme;
  };
};
```

详情[查看](./src/types.ts)

## Contribution

查看 [贡献指南](CONTRIBUTING.md).

## License

[MIT](LICENSE).

## Sponsoring

<table>
  <tr align="center">
    <td>
      <a href="https://www.buymeacoffee.com/innocces" target="_blank">
        <img width="120" src="https://api.iconify.design/simple-icons:buymeacoffee.svg">
      </a>
    </td>
    <td>
      <a href="https://afdian.net/a/innocces" target="_blank">
        <img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-12-04/1670124736895-afdian.png">
      </a>
    </td>
  </tr>
</table>
