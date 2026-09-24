# ONLYOFFICE DocSpace Apps API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Apps

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**get**](get.md) | **GET** /api/2.0/apps/\{id\} | Get an app |
| [**getAll**](get-all.md) | **GET** /api/2.0/apps | Get all apps |
| [**getSettings**](get-settings.md) | **GET** /api/2.0/apps/\{id\}/settings | Get app settings |
| [**setEnabled**](set-enabled.md) | **PUT** /api/2.0/apps/\{id\}/enabled | Enable or disable an app |
| [**setSettings**](set-settings.md) | **PUT** /api/2.0/apps/\{id\}/settings | Save app settings |

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

