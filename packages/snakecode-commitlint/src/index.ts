/** ******************************************************
Function used to export the CommitLint configuration.
******************************************************* */
export const setCommitLintConfig = () => ({
  extends: ["@commitlint/config-conventional", "@commitlint/config-lerna-scopes"],

  // Any rules defined below here will override rules from @commitlint/config-conventional
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "ci", "docs", "style", "refactor", "test", "revert", "lint"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "always", "."],
    "subject-max-length": [2, "always", 72],
    "type-case": [2, "always", "lower-case"],
  },
});
