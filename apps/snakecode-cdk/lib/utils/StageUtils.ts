import path from "node:path";

import type { App, Environment } from "aws-cdk-lib";

import { Constants, type StageConfiguration } from "@snakecode/models";
import { AmplifyStack } from "../stacks/AmplifyStack";
import { StaticWebsiteHostingStack } from "../stacks/StaticWebsiteHostingStack";

export class StageUtils {
  private readonly configuration: StageConfiguration;

  private readonly app: App;

  private readonly env: Environment;

  private readonly stage: string;

  constructor(app: App, configuration: StageConfiguration, env: Environment, stage: string) {
    this.app = app;
    this.configuration = configuration;
    this.env = env;
    this.stage = stage;
  }

  setupStages = () => {
    new AmplifyStack(this.app, this.configuration.amplifyStackConfiguration.stackName, {
      env: this.env,
      stage: this.stage,
      amplifyStackConfiguration: this.configuration.amplifyStackConfiguration,
    });

    new StaticWebsiteHostingStack(this.app, this.configuration.staticWebsiteHostingStackConfiguration.stackName, {
      env: this.env,
      stage: this.stage,
      staticWebsiteHostingStackConfiguration: this.configuration.staticWebsiteHostingStackConfiguration,
      staticAssetsFilePath: path.resolve(__dirname, "../../../../apps/snakecode-webapp/out"),
      cfnOutputName: Constants.StaticWebsiteHostingConstants.MAIN_WEBSITE_DOMAIN_NAME,
    });
  };
}
