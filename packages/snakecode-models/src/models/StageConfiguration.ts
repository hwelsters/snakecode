import type { AmplifyConfiguration, StaticWebsiteHostingStackConfiguration } from "./ServiceConfiguration";

export interface StageConfiguration {
  readonly amplifyStackConfiguration: AmplifyConfiguration;
  readonly staticWebsiteHostingStackConfiguration: StaticWebsiteHostingStackConfiguration;
}
