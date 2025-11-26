import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default defineConfig([globalIgnores(['_site/*', '!**/.eleventy.js']), {
  extends: compat.extends('eslint:recommended'),

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.commonjs,
      ...globals.node,
    },

    ecmaVersion: 11,
    sourceType: 'module',
  },

  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],

    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',

      ArrayPattern: {
        minItems: 3,
      },
    }],
  },
}])