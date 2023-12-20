export interface AmplifyConfiguration {
  readonly stackName: string;
  readonly amplifyAppName: string;
  readonly amplifyServiceRoleName: string;
  readonly amplifyAuthConfiguration: AmplifyAuthConfiguration;
}

export interface AmplifyAuthConfiguration {
  readonly stackName: string;
  readonly userPoolName: string;
  readonly userPoolClientName: string;
  readonly userPoolIdentityName: string;
  readonly userPoolDomainName: string;

  // Variables related to Google Identity Provider Login
  readonly userPoolIdentityProviderGoogleName: string;
  readonly userPoolIdentityProviderGoogleRoleName: string;
  readonly userPoolIdentityProviderGoogleSecretName: string;

  readonly userPoolIdentityProviderFacebookName: string;
  readonly userPoolIdentityProviderAppleName: string;

  readonly authenticatedRoleName: string;
  readonly unauthenticatedRoleName: string;
}
