module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 导入检查
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'no-use-before-define': 'off',
    // 不检查方法里面的参数
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    // 首位为下划线的命名
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-useless-escape': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'warn',
    'no-multi-assign': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'warn',
    'new-cap': 'off',
    camelcase: 'off',
    'no-case-declarations': 'off',
  },
};
