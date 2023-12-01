#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from '../lib/vpc';

const app = new cdk.App();

new VpcStack(app, 'VpcStack', {
  env: {
    account: '[ACCOUNT_NUMBER]',
    region: 'ap-southeast-2',
  },
});