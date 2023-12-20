/********************************************************
 * File used to define a namespace, to be used in laying
 * out all the constants used throughout.
 ********************************************************/

export namespace Constants {
  // Amplify constants used in mapping the CDK outputs to the AWS exports Amplify file
  export namespace AmplifyConstants {
    // General
    export const AMPLIFY_ID: string = `amplify_id`
    export const REGION: string = `region`

    // Cognito related
    export const COGNITO_REGION: string = `cognito_region`
    export const IDENTITY_POOL_ID: string = `identity_pool_id`
    export const USER_POOLS_ID: string = `user_pools_id`
    export const USER_POOLS_WEB_CLIENT_ID: string = `user_pools_web_client_id`
    export const USER_POOLS_DOMAIN_URL: string = `user_pools_domain_url`
  }
}
