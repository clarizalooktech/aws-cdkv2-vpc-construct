# Provision a VPC using CDKv2 TypeScript

This is a construct for CDK development with TypeScript to provision a vpc in your AWS account.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Step 1: Clone repo 
> git clone https://github.com/clarizalooktech/aws-cdkv2-vpc-construct.git 

### Step 2: Once its on your local computer, open it on VSCODE
> Go to your vscode

### Step 3: Update Code
> Go to bin/vpc.ts, update AWS account with your account

### Step 4: Configure AWS ACCESS keys in AWS console
> Go to your iam and configure keys

### Step 5: In your local computer, configure AWS ACCESS keys to setup prod profile
> aws configure

### Step 6: Synthesize CDK to create a Cloudformation Template
> cdk synth

### Step 7: Deploy CDK
> cdk deploy --profile prod

### Screenshots
> cdk synth
<img src="https://github.com/clarizalooktech/aws-cdkv2-vpc-construct/blob/main/vpc-cdk-synth.JPG" alt="CDK Synth" width="70%" height="70%" >
> cdk deploy
<img src="https://github.com/clarizalooktech/aws-cdkv2-vpc-construct/blob/main/vpc-cdk-deploy.JPG" alt="CDK Deploy" width="70%" height="70%" >
<img src="https://github.com/clarizalooktech/aws-cdkv2-vpc-construct/blob/main/vpc-cdk-deploy2.JPG" alt="CDK Deploy time" width="70%" height="70%" >
> VPC in console view
<img src="https://github.com/clarizalooktech/aws-cdkv2-vpc-construct/blob/main/vpc-cdk-deploy2.JPG" alt="CDK Deploy time" width="70%" height="70%" >
> cdk destroy
<img src="https://github.com/clarizalooktech/aws-cdkv2-vpc-construct/blob/main/vpc-console-view.JPG" alt="CDK Deploy time" width="70%" height="70%" >