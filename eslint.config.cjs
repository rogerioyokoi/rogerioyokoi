import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // replaces the ignorePatterns key
  {
    ignores: ["dist"],
  },

  eslint.configs.recommended, // sets up ESLint's recommended config,
  ...tseslint.configs.recommendedTypeChecked, // sets up typescript-eslint's requirements and it's "recommended-type-checked" config

  // config object with customizations
  {
    files: ['**/*.{cjs,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    // new way of importing plugins
    plugins: {
      react: eslintReact,
      prettier: eslintPluginPrettierRecommended,
    },

    // rule customizations stay the same
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "warn",
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  }
);
