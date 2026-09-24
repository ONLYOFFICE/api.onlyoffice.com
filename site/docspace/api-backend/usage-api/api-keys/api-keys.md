# ONLYOFFICE DocSpace API keys

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Api keys

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**createApiKey**](create-api-key.md) | **POST** /api/2.0/keys | Create a user API key |
| [**deleteApiKey**](delete-api-key.md) | **DELETE** /api/2.0/keys/\{keyId\} | Delete an API key |
| [**getAllPermissions**](get-all-permissions.md) | **GET** /api/2.0/keys/permissions | Get API key permissions |
| [**getApiKey**](get-api-key.md) | **GET** /api/2.0/keys/@self | Get the current API key |
| [**getApiKeys**](get-api-keys.md) | **GET** /api/2.0/keys | Get the API keys |
| [**updateApiKey**](update-api-key.md) | **PUT** /api/2.0/keys/\{keyId\} | Update an API key |

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

