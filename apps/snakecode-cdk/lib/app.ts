import type { Environment } from 'aws-cdk-lib'
import { App } from 'aws-cdk-lib'

import { INFRA_CONFIG } from '@snakecode/models'

import { StageUtils } from './utils/StageUtils'

const app = new App()

const stage = app.node.tryGetContext('stage') && app.node.tryGetContext('stage')!.toString()
const region = app.node.tryGetContext('region') && app.node.tryGetContext('region')!.toString()
const account = app.node.tryGetContext('account') && app.node.tryGetContext('account')!.toString()

if (!stage || !region || !account) {
  throw new Error(`Either stage, region or account arguments not passed in to CDK app, as \"-c stage={STAGE} -c region={REGION} -c account={ACCOUNT}\"`)
}

const environment: Environment = {
  account: account,
  region: region
}

const stageUtils = new StageUtils(app, INFRA_CONFIG, environment, stage)

stageUtils.setupStages()

app.synth()
