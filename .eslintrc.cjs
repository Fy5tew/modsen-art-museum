module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        'react-hooks',
        'react-refresh',
        'jsx-a11y',
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'eqeqeq': 'error',
        'curly': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { 'argsIgnorePattern': '^_' },
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'react-refresh/only-export-components': [
            'warn',
            { 'allowConstantExport': true },
        ],
        'prettier/prettier': 'error',
    },
};
