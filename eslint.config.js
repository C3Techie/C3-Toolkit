import expo from 'eslint-config-expo/flat.js';

export default [
  ...expo,
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
