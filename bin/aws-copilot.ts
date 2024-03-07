#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { ECRStack } from '../lib/common'
import { PrivateVPCStack } from '../lib/vpcs'

const app = new cdk.App()

// VPC Setting
// cdk deploy privateVPCStack
new PrivateVPCStack(app, 'privateVPCStack', {
  vpcCidr: '10.0.0.0/16',
  region: 'ap-northeast-2',
  azs: ['a', 'b'],
  natGateway: 1,
  enableDnsHostname: true,
  enableDNSSupport: true,
  tags: {
    Name: 'private-vpc',
    Version: '1.0.0',
    Env: 'test',
  },
})

// ECR
// cdk deploy ecrStack
new ECRStack(app, 'ecrStack', {
  tags: {
    Name: 'hello',
    Env: 'test',
    Version: '1.0.0',
  },
})
