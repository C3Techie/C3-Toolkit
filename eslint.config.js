import expo from 'eslint-config-expo/flat.js';

export default [
  ...expo,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    // Global ignore list for generated files
    ignores: [
      '.expo/**',
      'node_modules/**',
      'dist/**',
      'web-build/**',
      '.expo-test-export/**',
      '*.tsbuildinfo',
    ],
  },
];
