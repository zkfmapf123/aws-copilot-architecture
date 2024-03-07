import * as cdk from 'aws-cdk-lib'
import { Stack } from 'aws-cdk-lib'
import * as ecr from 'aws-cdk-lib/aws-ecr'
import { Construct } from 'constructs'
import { IStack, StackParams } from '../utils/stack'

interface Props extends StackParams {}

export class ECRStack extends Stack implements IStack<ecr.Repository, Props> {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props)

    const repository = this.create(props)
    this.setOutputs(repository)
  }

  create({ tags }: Props): ecr.Repository {
    const repository = new ecr.Repository(this, tags.Name, {
      repositoryName: tags.Name,
    })

    Object.entries(tags).forEach(([k, v]) => cdk.Tags.of(this).add(k, v))
    return repository
  }

  setOutputs(resource: ecr.Repository): void {
    new cdk.CfnOutput(this, 'ecrName', {
      value: resource.repositoryName,
      description: 'ECR Name',
      exportName: 'ecrName',
    })
  }
}
