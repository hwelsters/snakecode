import type { StackProps } from 'aws-cdk-lib'
import { Duration, NestedStack } from 'aws-cdk-lib'
import { AccountRecovery, CfnIdentityPool, CfnIdentityPoolRoleAttachment, ProviderAttribute, UserPool, UserPoolClient, UserPoolClientIdentityProvider, UserPoolIdentityProviderGoogle, VerificationEmailStyle } from 'aws-cdk-lib/aws-cognito'
import { FederatedPrincipal, Role } from 'aws-cdk-lib/aws-iam'
import type { Construct } from 'constructs'

import type { AmplifyAuthConfiguration } from '@snakecode/models'
import { APP_NAME, BASE_URL } from '@snakecode/models'

import Env from '../constants/Env'

export class AmplifyAuthStack extends NestedStack {
  readonly authenticatedRole: Role
  readonly unauthenticatedRole: Role

  // Outputs that will be used by other stacks
  readonly region: string
  readonly cognitoIdentityPoolId: string
  readonly cognitoUserPoolId: string
  readonly cognitoUserPoolClientId: string

  constructor(scope: Construct, id: string, props: StackProps & { amplifyAuthConfiguration: AmplifyAuthConfiguration, stage: string }) {
    super(scope, id, props)

    // Create a User Pool with email and password login
    const userPool = new UserPool(this, `${props.amplifyAuthConfiguration.userPoolName}-${props.stage}-${props.env!.region}`, {
      userPoolName: `${props.amplifyAuthConfiguration.userPoolName}-${props.stage}-${props.env!.region}`,
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: `Verify your email for ${APP_NAME}`,
        emailBody: `Your ${APP_NAME} verification code is {####}. Never share it!`,
        emailStyle: VerificationEmailStyle.CODE,
        smsMessage: `Your ${APP_NAME} verification code is {####}. Never share it!`
      },
      userInvitation: {
        emailSubject: `Invite to join ${APP_NAME}`,
        emailBody: `Hello, {username}, your temporary password for your new ${APP_NAME} account is {####}. Never share it!`,
        smsMessage: `Hello, {username}, your temporary password for your new ${APP_NAME} account is {####}. Never share it!`
      },
      signInAliases: {
        email: true
      },
      autoVerify: {
        email: true
      },
      standardAttributes: {
        email: {
          mutable: true,
          required: true
        }
      },
      passwordPolicy: {
        tempPasswordValidity: Duration.hours(24),
        minLength: 12,
        requireDigits: true,
        requireSymbols: true,
        requireUppercase: true,
        requireLowercase: true
      },
      signInCaseSensitive: false,
      accountRecovery: AccountRecovery.EMAIL_ONLY
    })

    // This allows users to sign in via Google on the frontend
    new UserPoolIdentityProviderGoogle(this, `${props.amplifyAuthConfiguration.userPoolIdentityProviderGoogleName}-${props.stage}-${props.env!.region}`, {
      userPool: userPool,
      clientId: Env.GOOGLE_CLIENT_ID,
      clientSecret: Env.GOOGLE_CLIENT_SECRET,
      scopes: ['email'],
      attributeMapping: {
        email: ProviderAttribute.GOOGLE_EMAIL
      }
    })

    // This user pool client will be used by the Amplify frontend
    const cognitoUserPoolClient = new UserPoolClient(this, `${props.amplifyAuthConfiguration.userPoolClientName}-${props.stage}-${props.env!.region}`, {
      userPool: userPool,
      generateSecret: true,
      supportedIdentityProviders: [UserPoolClientIdentityProvider.GOOGLE, UserPoolClientIdentityProvider.COGNITO],
      oAuth: {
        callbackUrls: [`${BASE_URL}`]
      }
    })

    const cognitoIdentityPool = new CfnIdentityPool(this, `${props.amplifyAuthConfiguration.userPoolIdentityName}-${props.stage}-${props.env!.region}`, {
      identityPoolName: `${props.amplifyAuthConfiguration.userPoolIdentityName}`,
      allowUnauthenticatedIdentities: false
    })

    // Creates the authenticated role which will be used with user pool identities
    this.authenticatedRole = new Role(this, `${props.amplifyAuthConfiguration.authenticatedRoleName}-${props.stage}-${props.env!.region}`, {
      roleName: `${props.amplifyAuthConfiguration.authenticatedRoleName}`,
      description: 'IAM Role to be used as an Unauthenticated role for the Cognito user pool identities, used by Amplify',
      assumedBy: new FederatedPrincipal(
        'cognito-identity.amazon.com',
        {
          StringEquals: {
            'cognito-identity.amazonaws.com:aud': cognitoIdentityPool.ref
          },
          'ForAnyValue:StringLike': {
            'cognito-identity.amazonaws.com:amr': 'authenticated'
          }
        },
        'sts:AssumeRoleWithWebIdentity'
      ),
      maxSessionDuration: Duration.hours(1)
    })

    // Creates the unauthenticated role which will be used with user pool identities
    this.unauthenticatedRole = new Role(this, `${props.amplifyAuthConfiguration.unauthenticatedRoleName}-${props.stage}-${props.env!.region}`, {
      roleName: `${props.amplifyAuthConfiguration.unauthenticatedRoleName}`,
      description: 'IAM Role to be used as an Authenticated role for the Cognito user pool identities, used by Amplify',
      assumedBy: new FederatedPrincipal(
        'cognito-identity.amazon.com',
        {
          StringEquals: {
            'cognito-identity.amazonaws.com:aud': cognitoIdentityPool.ref
          },
          'ForAnyValue:StringLike': {
            'cognito-identity.amazonaws.com:amr': 'unauthenticated'
          }
        },
        'sts:AssumeRoleWithWebIdentity'
      ),
      maxSessionDuration: Duration.hours(1)
    })

    new CfnIdentityPoolRoleAttachment(this, `${props.amplifyAuthConfiguration.authenticatedRoleName}-attachment-${props.stage}-${props.env!.region}`, {
      identityPoolId: cognitoIdentityPool.ref,
      roles: {
        unauthenticated: this.unauthenticatedRole.roleArn,
        authenticated: this.authenticatedRole.roleArn
      }
    })

    this.region = props.env!.region!
    this.cognitoIdentityPoolId = cognitoIdentityPool.ref
    this.cognitoUserPoolId = userPool.userPoolId
    this.cognitoUserPoolClientId = cognitoUserPoolClient.userPoolClientId
  }
}
