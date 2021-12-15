export const environment = {
  production: true,
  release:'',
  ampliyConfig: {
    aws_project_region: 'us-east-1',
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: 'us-east-1_K6GSEBrrR',
    aws_user_pools_web_client_id: 'ig496077p1vvjt6pbaclfvsni',
    oauth: {},
    aws_cloud_logic_custom: [
      {
        name: 'AdminQueries',
        endpoint:
          'https://vxnv75z8a2.execute-api.us-east-1.amazonaws.com/dev',
        region: 'us-east-1',
      },
    ],
  },
};
