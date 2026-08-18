import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  {
    ignores: ["dist", ".eslintrc.cjs"],
  },

  js.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],

  reactHooks.configs.flat.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      "react-refresh": reactRefresh,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "react/prop-types": "off",

      "react-hooks/set-state-in-effect": "off",
    },
  },
];