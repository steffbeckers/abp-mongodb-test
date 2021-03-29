import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Test',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44324',
    redirectUri: baseUrl,
    clientId: 'Test_App',
    responseType: 'code',
    scope: 'offline_access Test',
  },
  apis: {
    default: {
      url: 'https://localhost:44324',
      rootNamespace: 'Test',
    },
  },
} as Environment;
