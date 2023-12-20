import type { StageConfiguration } from "../models/StageConfiguration";

// The domain where the application will be hosted.
// It will be left blank if a domain doesn't exist.
export const BASE_URL: string = "http://localhost:3000";

// The name of the application
export const APP_NAME: string = "Snakecode";
export const ENVIRONMENT_NAME: string = APP_NAME.toLowerCase();

export const INFRA_CONFIG: StageConfiguration = {
  amplifyStackConfiguration: {
    stackName: `${ENVIRONMENT_NAME}-amplify-stack`,
    amplifyAppName: `${ENVIRONMENT_NAME}`,
    amplifyServiceRoleName: `${ENVIRONMENT_NAME}-application-service-role`,

    amplifyAuthConfiguration: {
      stackName: `${ENVIRONMENT_NAME}-amplify-auth-stack`,
      userPoolName: `${ENVIRONMENT_NAME}-user-pool`,
      userPoolClientName: `${ENVIRONMENT_NAME}-user-pool-client`,
      userPoolIdentityName: `${ENVIRONMENT_NAME}-user-pool-identity`,
      userPoolDomainName: `${ENVIRONMENT_NAME}-user-pool-domain`,

      userPoolIdentityProviderGoogleName: `${ENVIRONMENT_NAME}-user-pool-identity-google`,
      userPoolIdentityProviderGoogleRoleName: `${ENVIRONMENT_NAME}-user-pool-identity-google-role`,
      userPoolIdentityProviderGoogleSecretName: `${ENVIRONMENT_NAME}-user-pool-identity-client-secret`,

      userPoolIdentityProviderFacebookName: `${ENVIRONMENT_NAME}-user-pool-identity-facebook`,
      userPoolIdentityProviderAppleName: `${ENVIRONMENT_NAME}-user-pool-identity-apple`,

      unauthenticatedRoleName: `${ENVIRONMENT_NAME}-unauthenticated-role`,
      authenticatedRoleName: `${ENVIRONMENT_NAME}-authenticated-role`,
    },
  },
};
