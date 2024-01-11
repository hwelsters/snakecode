![image](https://github.com/hwelsters/snakecode/assets/84760072/89d6d98f-ff1c-40c4-8967-b98b2209180b)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

# About
Snakecode is a minimalistic and quirky website for learning how to program. If features numerous exercises formats and a profile system to store the user's progress.

# Features
- a minimalistic design.
- a built-in code editor with autocomplete.
- interactive exercises.

# Documentation
## Setting up
### CDK
A file `apps/snakecode-cdk/.env` should be created with the following content.

```bash
GOOGLE_CLIENT_ID=[YOUR GOOGLE CLIENT ID]
GOOGLE_CLIENT_SECRET=[YOUR GOOGLE CLIENT SECRET]

FACEBOOK_CLIENT_ID=[YOUR FACEBOOK CLIENT ID]
FACEBOOK_CLIENT_SECRET=[YOUR FACEBOOK CLIENT SECRET]
```

To get these values, create an OAuth 2.0 Client ID in your Google Developer Console.