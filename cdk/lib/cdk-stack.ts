import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as sqs from '@aws-cdk/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaRole = new iam.Role(this, 'lambda-role', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchLogsFullAccess'),
          iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSQSFullAccess'),
      ]
    });
    
    const queue = new sqs.Queue(this, 'queue', {
      fifo: true,
    });
    
    new cdk.CfnOutput(this, 'lambda-role-name', {
      exportName: `${id}:lambda-role-name`,
      value: lambdaRole.roleName,
    });
    
    new cdk.CfnOutput(this, 'queue-url', {
      exportName: `${id}:queue-url`,
      value: queue.queueUrl,
    });
  }
}
