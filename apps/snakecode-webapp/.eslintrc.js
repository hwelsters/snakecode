module.exports = {
  extends: [
    "airbnb-base",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "snakecode-base",
  ],
  rules: {},
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort",
      ],
      extends: [
        "plugin:tailwindcss/recommended",
        "airbnb",
        "airbnb-typescript",
        "next/core-web-vitals",
        "plugin:prettier/recommended",
        "snakecode-base",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@next/next/no-img-element": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "import/prefer-default-export": "off",
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "react/function-component-definition": "off",
        "react/destructuring-assignment": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^node:"],
              ["^next", "^react"],
              ["^@?\\w"],
              ["^@", "^@public", "^@root"],
              ["^\\."],
            ],
          },
        ],
        "tailwindcss/classnames-order": "warn",
        "tailwindcss/no-custom-classname": "warn",
        "tailwindcss/no-contradicting-classname": "error",
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      plugins: ["jest", "jest-formatting", "testing-library", "jest-dom"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
      ],
    },
    {
      files: ["cypress/**/*.ts"],
      plugins: ["cypress"],
      extends: ["plugin:cypress/recommended"],
      parserOptions: {
        project: "./cypress/tsconfig.json",
      },
    },
  ],
};
