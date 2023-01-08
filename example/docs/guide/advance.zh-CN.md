---
nav: 指南
group:
  title: 进阶
  order: 2
toc: content
---

# 主题配置

## social

- 类型: `SocialMap`
- 默认值: `undefined`

社交媒体配置: 如 github & discord

```ts | pure
/**
 * @description 社交类型枚举
 */
export enum SOCIALS {
  /**
   * github
   */
  GITHUB = 'github',
  /**
   * discord
   */
  DISCORD = 'discord'
}

/**
 * @description 社交项目配置
 */
export type SocialItem = {
  /**
   * @descripion alt 或 按钮信息
   */
  name: string;
  /**
   * @description 链接地址
   */
  link: string;
  /**
   * @description 页面打开方式
   * @default __blank
   */
  target: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};

export type SocialMap = Record<SOCIALS, SocialItem>;
```

## helmetIcon

- 类型: `string`
- 默认值: `undefined`

helmet 生成 title 的 分割符: `${themeConfig.title} ${helmetIcon} ${subTitle}`

## description

- 类型: `string`
- 默认值: `package.json.description`

head meta 标签 description

## keywords

- 类型: `string[]`
- 默认值: `package.json.keywords`

head meta 标签 keywords

## author

- 类型: `string`
- 默认值: `package.json.author`

head meta 标签 author

## search

- 类型: `boolean | Search`
- 默认值: `true`

是否使用搜索功能, 若配置为布尔值, 展示或关闭. 也可通过更多详细配置

```ts | pure
export enum SEARCHTYPE {
  /**
   * @description 使用cmdk 展示 dumi自带搜索功能
   */
  CMDK = 'cmdk',
  /**
   * @description 使用 algolia docsearch 搜索功能
   */
  DOCSEARCH = 'docsearch'
}

export type Search = {
  /**
   * @description 搜索类型
   * @default SEARCHTYPE.CMDK
   */
  type: SEARCHTYPE;
  /**
   * @description DocSearch 配置
   */
  config?: DocSearchConfig;
};
```

### CMDK

默认的搜索引擎为 `<CMDK />`

- 使用布尔类型: `true`

```ts | pure
{
  search: true;
}
```

- 使用 `Search` 类型配置

```ts | pure
{
  search: {
    type: 'cmdk';
  }
}
```

### DOCSEARCH

使用 algolia docsearch 搜索

```ts | pure
{
  search: {
    type: 'docsearch',
    config: {
      /**
       * @description 你的 Algolia application ID.
       */
      appId: string;
      /**
       * @description 你的 Algolia Search API key.
       */
      apiKey: string;
      /**
       * @description 你的 Algolia index name.
       */
      indexName: string;
    }
  }
}
```

## announcementBar

- 类型: `AnnouncementBarConfig`
- 默认值: `undefined`

页面顶部的声明通知条配置

```ts | pure
export type AnnouncementBarConfig = {
  /**
   * @description 是否可关闭
   */
  isCloseable?: boolean;
  /**
   * @description 文字颜色
   */
  textColor?: string;
  /**
   * @description 背景色
   */
  backgroundColor?: string;
  /**
   * @description dom id
   */
  id: string;
  /**
   * @description 内容，可以使用html
   */
  content: string;
};
```

## hero

- 类型: `HeroConfig`
- 默认值: `undefined`

首页 hero 配置

```ts | pure
export type HeroConfig = {
  /**
   * @description 是否展示版本徽标
   */
  showVersionBadge?: boolean;
};
```

## thumbBackground

- 类型: `boolean | string`
- 默认值: `false`

文档背景图. 若配置为布尔值则展示内置的默认背景图

## settingPanelVisible

- 类型: `boolean`
- 默认值: `false`

设置面板

## code

- 类型: `Code`
- 默认值: `undefined`

`<SourceCode />` 组件设置

```ts | pure
export type Code = {
  /**
   * @description prism 主题
   * @default { dark: PRISMTHEME.VSDARK, light: PRISMTHEME.VSLIGHT }
   */
  theme?: CodeTheme;
};
export type CodeTheme =
  | PRISMTHEME
  | PRISMTHEME[]
  | { light: PRISMTHEME; dark: PRISMTHEME };
```
