## Contribute

- install deps

```bash
$ pnpm install
```

after the dependencies are installed, a symlink from `example/.dumi/theme` to `../../src` will be created automatically, the symlink makes dumi load our theme package as a local theme, so we can start the example directly, HMR is also available!

- dev

```bash
$ pnpm run dev
```

open [http://localhost:8000](http://localhost:8000/) to debug u feature

> Note: all Node.js-runtime files should be put into `src/plugin` directory, `father-plugin-dumi-theme` will transform them to CommonJS dist automatically.
