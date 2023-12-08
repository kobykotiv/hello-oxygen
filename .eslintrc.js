<<<<<<< HEAD
=======
/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
>>>>>>> 60d9917 (Started adding neo-brutalist design)
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    'plugin:hydrogen/recommended',
<<<<<<< HEAD
  ],
  rules: {
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
=======
    'plugin:hydrogen/typescript',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
>>>>>>> 60d9917 (Started adding neo-brutalist design)
    'no-case-declarations': 'off',
  },
};
