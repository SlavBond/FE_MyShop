// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  // ⛔ не линтим конфиги/сборочные файлы
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'eslint.config.*',     // ← важно
      'next.config.*'
    ],
  },

  // JS-правила для .js/.jsx/.mjs/.cjs
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...js.configs.recommended,
  },

  // TS-правила (БЫСТРО) — без type-check
  // ...tseslint.configs.recommended,

  // TS-правила (СТРОГО) — с type-check
  // применяем ТОЛЬКО к .ts/.tsx
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: { project: ['./tsconfig.json'] },
    },
  },

  // Правила Next.js (core-web-vitals) и сервисные правила
  {
    plugins: { '@next/next': nextPlugin, 'unused-imports': unusedImports },
    rules: {
      // подключаем набор core-web-vitals
      ...nextPlugin.configs['core-web-vitals'].rules,

        // 🔹 выключаем дублирующее правило
      '@typescript-eslint/no-unused-vars': 'off',

      // Лишние импорты/переменные
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
      ],

      // Предупреждать за any
      '@typescript-eslint/no-explicit-any': 'warn',

      // Ругаться на console.log, но разрешать warn/error
      'no-console': ['warn', { allow: ['warn', 'error'] }],

        // 🔸 Всегда одинарные кавычки (кроме случаев, когда нужны двойные внутри строки)
      'quotes': ['error', 'single', { 'avoidEscape': true }],
    },
  },
];
