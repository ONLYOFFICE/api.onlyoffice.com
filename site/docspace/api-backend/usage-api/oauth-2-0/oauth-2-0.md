# ONLYOFFICE DocSpace OAuth 2.0 API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Authorization

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**authorizeOAuth**](authorization/authorize-o-auth.md) | **GET** /oauth2/authorize | Start the authorization flow |
| [**exchangeToken**](authorization/exchange-token.md) | **POST** /oauth2/token | Exchange the authorization code |
| [**submitConsent**](authorization/submit-consent.md) | **POST** /oauth2/authorize | Submit the consent decision |

## Client Management

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**changeActivation**](client-management/change-activation.md) | **PATCH** /api/2.0/oauth2/clients/\{clientId\}/activation | Change client activation status |
| [**createClient**](client-management/create-client.md) | **POST** /api/2.0/oauth2/clients | Create a new OAuth2 client |
| [**deleteClient**](client-management/delete-client.md) | **DELETE** /api/2.0/oauth2/clients/\{clientId\} | Delete an OAuth2 client |
| [**deleteTenantClients**](client-management/delete-tenant-clients.md) | **DELETE** /api/2.0/oauth2/clients/tenant | Delete all tenant OAuth2 clients |
| [**deleteUserClients**](client-management/delete-user-clients.md) | **DELETE** /api/2.0/oauth2/clients | Delete all user OAuth2 clients |
| [**regenerateSecret**](client-management/regenerate-secret.md) | **PATCH** /api/2.0/oauth2/clients/\{clientId\}/regenerate | Regenerate client secret |
| [**revokeUserClient**](client-management/revoke-user-client.md) | **DELETE** /api/2.0/oauth2/clients/\{clientId\}/revoke | Revoke client consent |
| [**updateClient**](client-management/update-client.md) | **PUT** /api/2.0/oauth2/clients/\{clientId\} | Update an existing OAuth2 client |

## Client Querying

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getClient**](client-querying/get-client.md) | **GET** /api/2.0/oauth2/clients/\{clientId\} | Get client details |
| [**getClientInfo**](client-querying/get-client-info.md) | **GET** /api/2.0/oauth2/clients/\{clientId\}/info | Get client info |
| [**getClients**](client-querying/get-clients.md) | **GET** /api/2.0/oauth2/clients | List clients |
| [**getClientsInfo**](client-querying/get-clients-info.md) | **GET** /api/2.0/oauth2/clients/info | List client info |
| [**getConsents**](client-querying/get-consents.md) | **GET** /api/2.0/oauth2/clients/consents | List user consents |
| [**getPublicClientInfo**](client-querying/get-public-client-info.md) | **GET** /api/2.0/oauth2/clients/\{clientId\}/public/info | Get public client info |

## Discovery

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**handleOptions**](discovery/handle-options.md) | **OPTIONS** /.well-known/oauth-authorization-server | Probe the discovery endpoint |

## Scope Management

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getScopes**](scope-management/get-scopes.md) | **GET** /api/2.0/oauth2/scopes | List available OAuth2 scopes |

## Authorization

### cookieAuth
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### bearerAuth

- **Type**: HTTP Bearer Token authentication

### asc_auth_key
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 

### Basic

- **Type**: HTTP basic authentication

### Bearer

- **Type**: HTTP Bearer Token authentication (JWT)

### ApiKeyBearer
- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header

### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources

### OpenId

### x-signature
- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: 

