import type { StackProps } from 'aws-cdk-lib'
import { aws_amplify, CfnOutput, Stack } from 'aws-cdk-lib'
import type { Construct } from 'constructs'

import type { AmplifyConfiguration } from '@snakecode/models'
import { APP_NAME, Constants } from '@snakecode/models'

import { AmplifyAuthStack } from './AmplifyAuthStack'

export class AmplifyStack extends Stack {
  /**
   * Constructor for the Amplify Stack
   *
   * @param scope the scope of the stack
   * @param id the name to give the stack on AWS Cloudformation.
   * @param props various properties to be passed in
   */
  constructor(scope: Construct, id: string, props: StackProps & { amplifyStackConfiguration: AmplifyConfiguration; stage: string }) {
    super(scope, id, props)

    // The website uses NextJS SSG which will be deployed by uploading the .zip file to Amplify.
    const amplifyApp = new aws_amplify.CfnApp(this, `${props.amplifyStackConfiguration.amplifyAppName}-${props.stage}-${props.env!.region}`, {
      name: `${props.amplifyStackConfiguration.amplifyAppName}`,
      iamServiceRole: `${props.amplifyStackConfiguration.amplifyServiceRoleName}`,
      description: `The ${APP_NAME} AWS Amplify Application`
    })

    // Create the nested stack which will contain all the resources related to authentication.
    const authStack = new AmplifyAuthStack(this, `${props.amplifyStackConfiguration.amplifyAuthConfiguration.stackName}-${props.stage}-${props.env!.region}`, {
      stackName: `${props.amplifyStackConfiguration.amplifyAuthConfiguration.stackName}`,
      description: `This stack will contain all the ${APP_NAME} Auth related resources`,
      amplifyAuthConfiguration: props.amplifyStackConfiguration.amplifyAuthConfiguration,
      stage: props.stage,
      env: props.env
    })

    // Create the cloudformation outputs that will be outputted to the resulting file used by the Amplify frontend
    amplifyApp &&
      new CfnOutput(this, Constants.AmplifyConstants.AMPLIFY_ID, {
        exportName: Constants.AmplifyConstants.AMPLIFY_ID.replaceAll('_', '-'),
        value: amplifyApp.attrAppId
      })

    amplifyApp &&
      new CfnOutput(this, Constants.AmplifyConstants.REGION, {
        exportName: Constants.AmplifyConstants.REGION.replaceAll('_', '-'),
        value: props.env!.region!
      })

    amplifyApp &&
      new CfnOutput(this, Constants.AmplifyConstants.COGNITO_REGION, {
        exportName: Constants.AmplifyConstants.COGNITO_REGION.replaceAll('_', '-'),
        value: authStack.region
      })

    new CfnOutput(this, Constants.AmplifyConstants.COGNITO_IDENTITY_POOL_ID, {
      exportName: Constants.AmplifyConstants.COGNITO_IDENTITY_POOL_ID.replaceAll('_', '-'),
      value: authStack.cognitoIdentityPoolId
    })

    new CfnOutput(this, Constants.AmplifyConstants.USER_POOLS_ID, {
      exportName: Constants.AmplifyConstants.USER_POOLS_ID.replaceAll('_', '-'),
      value: authStack.cognitoUserPoolId
    })

    new CfnOutput(this, Constants.AmplifyConstants.USER_POOLS_WEB_CLIENT_ID, {
      exportName: Constants.AmplifyConstants.USER_POOLS_WEB_CLIENT_ID.replaceAll('_', '-'),
      value: authStack.cognitoUserPoolClientId
    })
  }
}
