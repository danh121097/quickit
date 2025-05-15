import pluginVue from 'eslint-plugin-vue';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import unusedImports from 'eslint-plugin-unused-imports';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      '@typescript-eslint/no-explicit-any': 'off',

      // multi word component name
      'vue/multi-word-component-names': 'off',

      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': 'warn',

      'unused-imports/no-unused-imports': 'warn',

      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
);
