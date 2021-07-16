const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:553164e5-bf56-441e-8c24-2e60fadafac1",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_EBNwCwIal",
  aws_user_pools_web_client_id: "7v8f9co8n07ln730uff4q8ghmd",
  oauth: {
    domain: "onmo-dev.auth.us-east-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "https://dev.onmostealth.com/",
    redirectSignOut: "https://dev.onmostealth.com/",
    responseType: "code",
  },
  federationTarget: "COGNITO_USER_AND_IDENTITY_POOLS",
  aws_appsync_graphqlEndpoint:
    "https://qgt775bmejdcxfkidvudqnzh4y.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_cloud_logic_custom: [],
};

export default awsmobile;
