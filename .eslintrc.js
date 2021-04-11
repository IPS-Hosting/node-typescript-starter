module.exports = {
	extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
	ignorePatterns: ['node_modules/', 'dist/'],
	root: true,
	env: {
		node: true,
		es2017: true,
	},
	overrides: [
		{
			files: ['*.ts'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier', // We need to extend prettier again so that ts rules get disabled.
			],
			plugins: ['@typescript-eslint'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				project: './tsconfig.eslint.json',
			},
			rules: {
				'no-undef': 'off', // TypeScript already ensures we are not using non-existent variables.
				'no-unexpected-multiline': 'off', // This rule might interfere with prettier styling.
				// We disable the following rules to allow a more lean TypeScript code style.
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-inferrable-types': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-explicit-any': [
					'warn',
					{
						fixToUnknown: true,
						ignoreRestArgs: true,
					},
				],
			},
		},
	],
}
