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
      queueName: 'asyncjob-sample-queue.fifo'
    });

    const queueDev1 = new sqs.Queue(this, 'queue-dev1', {
      fifo: true,
      queueName: 'asyncjob-sample-queue-dev1.fifo'
    });
    
    new cdk.CfnOutput(this, 'lambda-role-name', {
      exportName: `${id}:lambda-role-name`,
      value: lambdaRole.roleName,
    });
    
    new cdk.CfnOutput(this, 'queue-url', {
      exportName: `${id}:queue-url`,
      value: queue.queueUrl,
    });

    new cdk.CfnOutput(this, 'queue-dev1-url', {
      exportName: `${id}:queue-dev1-url`,
      value: queueDev1.queueUrl,
    });
  }
}
