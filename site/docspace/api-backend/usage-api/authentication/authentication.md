# ONLYOFFICE DocSpace Authentication API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Authentication

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**authenticateMe**](authenticate-me.md) | **POST** /api/2.0/authentication | Authenticate a user |
| [**authenticateMeFromBodyWithCode**](authenticate-me-from-body-with-code.md) | **POST** /api/2.0/authentication/\{code\} | Authenticate a user by code |
| [**checkConfirm**](check-confirm.md) | **POST** /api/2.0/authentication/confirm | Check a confirmation link |
| [**getIsAuthentificated**](get-is-authentificated.md) | **GET** /api/2.0/authentication | Check authentication |
| [**logout**](logout.md) | **POST** /api/2.0/authentication/logout | Log out |
| [**saveMobilePhone**](save-mobile-phone.md) | **POST** /api/2.0/authentication/setphone | Set a mobile phone |
| [**sendSmsCode**](send-sms-code.md) | **POST** /api/2.0/authentication/sendsms | Send SMS code |

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

