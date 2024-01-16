module.exports = {
  extends: ['prettier', 'turbo'],
  plugins: ['prettier', 'import-helpers', '@typescript-eslint'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { js: true, ts: true },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },

  rules: {
    'prettier/prettier': 'warn',

    camelcase: 'off',
    'no-var': 'error',
    'no-shadow': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: false }],
    'default-param-last': 'off',
    'dot-notation': 'off',
    'lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    'array-callback-return': 'warn',
    eqeqeq: 'warn',
    'no-constructor-return': 'error',
    'no-catch-shadow': 'error',
    'no-cond-assign': 'warn',
    'no-const-assign': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'error',
    'no-dupe-else-if': 'warn',
    'no-duplicate-case': 'warn',
    'no-duplicate-imports': 'warn',
    'no-empty': 'warn',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extra-bind': 'warn',
    'no-ex-assign': 'warn',
    'no-extra-boolean-cast': 'warn',
    'default-case': 'warn',
    'no-invalid-this': 'off',
    'no-implied-eval': 'off',
    'no-invalid-regexp': 'error',
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'off',
    'no-useless-constructor': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'operator-assignment': ['warn', 'always'],
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'warn',
    'require-await': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'constructor-super': 'error',
    curly: 'warn',
    'object-shorthand': ['warn', 'always'],
    'prefer-const': 'error',
    'import/no-unresolved': 'off',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-anonymous-default-export': 'warn',
    'import/no-useless-path-segments': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/tests/**/*.ts*',
          '**/__tests__/**/*.ts*',
          '**/*.test.ts*',
          '**/scripts/**/*.ts*',
          '**/*.config.ts',
          '**/*.config.mts',
        ],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@@//', ['/^@//', '/^@tests/', '/^@scripts/'], ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],

    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'all',
        caughtErrors: 'all',
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowString: true,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: false,
        allowAny: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/dot-notation': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-condition': ['warn', { allowConstantLoopConditions: true }],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-loss-of-precision': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        filter: { regex: '^.+-.+$', match: false },
      },
      { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
      { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'parameterProperty', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'classProperty', format: ['camelCase'], leadingUnderscore: 'allow' },
      { selector: 'classProperty', modifiers: ['static'], format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'classMethod', format: ['camelCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      {
        selector: 'typeProperty',
        format: [],
        custom: { regex: '^.+$', match: true },
      },
      { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
      { selector: 'typeParameter', format: ['PascalCase'], custom: { regex: '^T[A-Z]', match: false } },
      {
        selector: 'objectLiteralProperty',
        format: [],
        custom: { regex: '^.+$', match: true },
      },
      { selector: 'objectLiteralMethod', format: ['camelCase', 'PascalCase'] },
    ],
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',

    'turbo/no-undeclared-env-vars': 'off',
  },

  overrides: [
    {
      files: ['**/__tests__/**/*.ts*', '**/*.test.ts*', '**/*.spec.ts*', '**/tests/**/utils/*.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
};
