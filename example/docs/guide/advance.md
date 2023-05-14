---
nav: Guide
group:
  title: Advance
  order: 2
toc: content
---

# Theme Setting

## social

- type: `SocialMap`
- default: `undefined`

socails config: like github & discord

```ts | pure
export type Socials = 'github' | 'discord' | string;

/**
 * @description social item config
 */
export type SocialItem = {
  /**
   * @descripion alt or label message
   */
  name: string;
  /**
   * @description element a href sources
   */
  link: string;
  /**
   * @description custom icon url
   */
  icon?: string;
  /**
   * @description anchor open way
   * @default __blank
   */
  target: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
};

export type SocialMap = Record<Socials, SocialItem>;
```

## helmetIcon

- type: `string`
- default: `undefined`

splitor of helmet generate word: `${themeConfig.title} ${helmetIcon} ${subTitle}`

## description

- type: `string`
- default: `package.json.description`

head meta description

## keywords

- type: `string[]`
- default: `package.json.keywords`

head meta keywords

## author

- type: `string`
- default: `package.json.author`

head meta author

## search

- type: `boolean | Search`
- default: `true`

whether use search feature, when boolean, open or close. use object to config more

```ts | pure
export enum SEARCHTYPE {
  /**
   * @description use cmdk & dumi origin search
   */
  CMDK = 'cmdk',
  /**
   * @description use algolia docsearch for search
   */
  DOCSEARCH = 'docsearch'
}

export type Search = {
  /**
   * @description site search type
   * @default SEARCHTYPE.CMDK
   */
  type: SEARCHTYPE;
  /**
   * @description DocSearchConfig
   */
  config?: DocSearchConfig;
};
```

### CMDK

default search engine is `<CMDK />`

- use boolean: `true` setting

```ts | pure
{
  search: true;
}
```

- use `Search` type setting

```ts | pure
{
  search: {
    type: 'cmdk';
  }
}
```

### DOCSEARCH

use algolia docsearch for search

```ts | pure
{
  search: {
    type: 'docsearch',
    config: {
      /**
       * @description Your Algolia application ID.
       */
      appId: string;
      /**
       * @description Your Algolia Search API key.
       */
      apiKey: string;
      /**
       * @description Your Algolia index name.
       */
      indexName: string;
    }
  }
}
```

## announcementBar

- type: `AnnouncementBarConfig`
- default: `undefined`

announcementBar of top container setting

```ts | pure
export type AnnouncementBarConfig = {
  /**
   * @description whether announce closeable
   */
  isCloseable?: boolean;
  /**
   * @description announce text color
   */
  textColor?: string;
  /**
   * @description announce background color
   */
  backgroundColor?: string;
  /**
   * @description announce dom id
   */
  id: string;
  /**
   * @description announce content, like html string
   */
  content: string;
};
```

## hero

- type: `HeroConfig`
- default: `undefined`

hero setting for homepage

```ts | pure
export type HeroConfig = {
  /**
   * @description whether show version badge
   */
  showVersionBadge?: boolean;
};
```

## thumbBackground

- type: `boolean | string`
- default: `false`

doc body background image. if boolean. use default background image

## settingPanelVisible

- type: `boolean`
- default: `false`

setting panel visiblity

## code

- type: `Code`
- default: `undefined`

`<SourceCode />` setting

```ts | pure
export type Code = {
  /**
   * @description prism themes
   * @default { dark: PRISMTHEME.VSDARK, light: PRISMTHEME.VSLIGHT }
   */
  theme?: CodeTheme;
};
export type CodeTheme =
  | PRISMTHEME
  | PRISMTHEME[]
  | { light: PRISMTHEME; dark: PRISMTHEME };
```
