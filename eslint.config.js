import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração para carregar regras antigas (.eslintrc style)
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
});

export default [
  // 1. Configuração Padrão do ESLint
  js.configs.recommended,

  // 2. Aplica as Regras do Airbnb
  ...compat.extends('airbnb-base'),

  // 3. Configurações Específicas do Projeto
  {
    ignores: ['node_modules/', 'dist/'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        node: true,
        // Necessário se você usa semantic-release
        nextRelease: 'readonly',
      },
    },

    // Suas regras personalizadas
    rules: {
      'no-console': 'off',
      // Permite o uso de require() (CommonJS) mesmo com type: module
      'import/no-commonjs': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
