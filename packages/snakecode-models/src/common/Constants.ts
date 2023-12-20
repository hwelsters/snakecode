/********************************************************
 * File used to define a namespace, to be used in laying
 * out all the constants used throughout.
 ********************************************************/

import { ENVIRONMENT_NAME } from '../config/Configuration'

export namespace Constants {
  // Amplify constants used in mapping the CDK outputs to the AWS exports Amplify file
  export namespace AmplifyConstants {
    // General
    export const AMPLIFY_ID: string = `${ENVIRONMENT_NAME}_amplify_id`
    export const REGION: string = `${ENVIRONMENT_NAME}_region`

    // Cognito related
    export const COGNITO_IDENTITY_POOL_ID: string = `${ENVIRONMENT_NAME}_cognito_identity_pool_id`
    export const COGNITO_REGION: string = `${ENVIRONMENT_NAME}_cognito_region`
    export const USER_POOLS_ID: string = `${ENVIRONMENT_NAME}_user_pools_id`
    export const USER_POOLS_WEB_CLIENT_ID: string = `${ENVIRONMENT_NAME}_user_pools_web_client_id`
  }
}
