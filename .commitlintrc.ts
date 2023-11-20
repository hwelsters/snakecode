import { setCommitLintConfig } from "./packages/snakecode-commitlint/src/index";
let commitLintConfig = setCommitLintConfig();
module.exports = {
    ...commitLintConfig
};
