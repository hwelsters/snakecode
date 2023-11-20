module.exports = {
  extends: ["plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  rules: {},
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "simple-import-sort",
        "tsdoc",
      ],
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": [
          "error",
          {
            bracketSpacing: true,
            endOfLine: "auto",
            printWidth: 240,
            singleQuote: true,
            semi: false,
            trailingComma: "none",
          },
        ],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "import/prefer-default-export": "off",
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^node:"],
              ["^@?\\w"],
              ["^@snakecode"],
              ["^@", "^@public"],
              ["^\\."],
            ],
          },
        ],
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
  ],
};
