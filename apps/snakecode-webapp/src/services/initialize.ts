import { Amplify } from "aws-amplify";

import { Constants, INFRA_CONFIG } from "@snakecode/models";
import envInfo from "@root/local-env-info.json";

/**
 * Responsible for connecting Amplify on the frontend with the AWS Resources provisioned to the backend via AWS CDK.
 */
const initialize = () => {
  const baseAmplifyCDKStackName: string = INFRA_CONFIG.amplifyStackConfiguration.stackName;

  // Load the exports provisioned by AWS CDK.
  // The comment below turns off ESLint just for this line.
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const cdkExport = require(`@root/exports/cdk-exports-${envInfo.envName}.json`)[baseAmplifyCDKStackName];

  // Set up Amplify configuration
  Amplify.configure({
    // General Amplify configuration
    aws_project_region: cdkExport[Constants.AmplifyConstants.REGION.replaceAll("_", "")],

    // Amplify Auth configuration
    aws_cognito_region: cdkExport[Constants.AmplifyConstants.COGNITO_REGION.replaceAll("_", "")],
    aws_user_pools_id: cdkExport[Constants.AmplifyConstants.USER_POOLS_ID.replaceAll("_", "")],
    aws_user_pools_web_client_id: cdkExport[Constants.AmplifyConstants.USER_POOLS_WEB_CLIENT_ID.replaceAll("_", "")],
    aws_cognito_identity_pool_id: cdkExport[Constants.AmplifyConstants.IDENTITY_POOL_ID.replaceAll("_", "")],

    // Amplify Auth Federated Sign In configuration
    oauth: {
      domain: cdkExport[Constants.AmplifyConstants.USER_POOLS_DOMAIN_URL.replaceAll("_", "")],
      scope: ["phone", "email", "openid", "profile", "aws.cognito.signin.user.admin"],
      redirectSignIn: ["http://localhost:3000/"],
      redirectSignOut: ["http://localhost:3000/"],
      responseType: "code",
    },
    aws_cognito_social_providers: ["GOOGLE"],
    federationTarget: "COGNITO_USER_POOLS",
  });
};

export default initialize;
