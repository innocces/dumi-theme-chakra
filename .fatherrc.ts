import { defineConfig } from 'father';

export default defineConfig({
  plugins: ['father-plugin-dumi-theme'],
  cjs: {
    input: 'src/factory'
  }
});
