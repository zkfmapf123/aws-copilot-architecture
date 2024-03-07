import * as cdk from 'aws-cdk-lib'
import { Stack } from 'aws-cdk-lib'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import { Construct } from 'constructs'
import { inspectFunc } from '../utils/fp'
import { IStack, StackParams } from '../utils/stack'

interface Props extends StackParams {
  vpcCidr: string
  region: string
  azs: string[]
  natGateway?: number
  enableDnsHostname?: boolean
  enableDNSSupport?: boolean
}

export class PrivateVPCStack extends Stack implements IStack<ec2.Vpc, Props> {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props)

    // inspect vpc options
    const errMsg = inspectFunc<Props>(props, [
      {
        func: this.isExisAzs,
        errorMessage: 'azs must be over the 1',
      },
    ])

    if (errMsg.length > 1) {
      console.error(errMsg)
      throw new Error('Invalid VPC Create Errro')
    }

    const vpc = this.create(this, props)
    this.setOutputs(vpc)
  }

  create(scope: Construct, props: Props): ec2.Vpc {
    const { vpcCidr, region, azs, natGateway, enableDNSSupport, enableDnsHostname, tags } = props

    // Create VPC
    const vpc = new ec2.Vpc(scope, tags.Name, {
      vpcName: tags.Name,
      ipAddresses: ec2.IpAddresses.cidr(vpcCidr),
      maxAzs: azs.length,
      natGateways: natGateway ?? 1,
      enableDnsHostnames: enableDnsHostname ?? true,
      enableDnsSupport: enableDNSSupport ?? true,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public-subnet',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'private-subnet',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    })

    // Attach Tags
    Object.entries(tags).forEach(([k, v]) => cdk.Tags.of(this).add(k, v))
    return vpc
  }

  isExisAzs({ azs }: Props): boolean {
    if (azs.length <= 0) {
      return false
    }

    return true
  }

  setOutputs(vpc: ec2.Vpc) {
    new cdk.CfnOutput(this, 'VPCId', {
      value: vpc.vpcId,
      description: 'vpc ID',
      exportName: 'vpcId',
    })
  }
}
