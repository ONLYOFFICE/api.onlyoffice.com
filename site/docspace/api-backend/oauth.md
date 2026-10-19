# ONLYOFFICE DocSpace OAuth 2.0 API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Endpoints

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *OAuth20AuthorizationApi* | [**authorizeOAuth**](#authorizeoauth) | **GET** /oauth2/authorize | Start the authorization flow |
| *OAuth20AuthorizationApi* | [**exchangeToken**](#exchangetoken) | **POST** /oauth2/token | Exchange the authorization code |
| *OAuth20AuthorizationApi* | [**submitConsent**](#submitconsent) | **POST** /oauth2/authorize | Submit the consent decision |
| *OAuth20ClientManagementApi* | [**changeActivation**](#changeactivation) | **PATCH** /api/2.0/oauth2/clients/\{clientId\}/activation | Change client activation status |
| *OAuth20ClientManagementApi* | [**createClient**](#createclient) | **POST** /api/2.0/oauth2/clients | Create a new OAuth2 client |
| *OAuth20ClientManagementApi* | [**deleteClient**](#deleteclient) | **DELETE** /api/2.0/oauth2/clients/\{clientId\} | Delete an OAuth2 client |
| *OAuth20ClientManagementApi* | [**deleteTenantClients**](#deletetenantclients) | **DELETE** /api/2.0/oauth2/clients/tenant | Delete all tenant OAuth2 clients |
| *OAuth20ClientManagementApi* | [**deleteUserClients**](#deleteuserclients) | **DELETE** /api/2.0/oauth2/clients | Delete all user OAuth2 clients |
| *OAuth20ClientManagementApi* | [**regenerateSecret**](#regeneratesecret) | **PATCH** /api/2.0/oauth2/clients/\{clientId\}/regenerate | Regenerate client secret |
| *OAuth20ClientManagementApi* | [**revokeUserClient**](#revokeuserclient) | **DELETE** /api/2.0/oauth2/clients/\{clientId\}/revoke | Revoke client consent |
| *OAuth20ClientManagementApi* | [**updateClient**](#updateclient) | **PUT** /api/2.0/oauth2/clients/\{clientId\} | Update an existing OAuth2 client |
| *OAuth20ClientQueryingApi* | [**getClient**](#getclient) | **GET** /api/2.0/oauth2/clients/\{clientId\} | Get client details |
| *OAuth20ClientQueryingApi* | [**getClientInfo**](#getclientinfo) | **GET** /api/2.0/oauth2/clients/\{clientId\}/info | Get client info |
| *OAuth20ClientQueryingApi* | [**getClients**](#getclients) | **GET** /api/2.0/oauth2/clients | List clients |
| *OAuth20ClientQueryingApi* | [**getClientsInfo**](#getclientsinfo) | **GET** /api/2.0/oauth2/clients/info | List client info |
| *OAuth20ClientQueryingApi* | [**getConsents**](#getconsents) | **GET** /api/2.0/oauth2/clients/consents | List user consents |
| *OAuth20ClientQueryingApi* | [**getPublicClientInfo**](#getpublicclientinfo) | **GET** /api/2.0/oauth2/clients/\{clientId\}/public/info | Get public client info |
| *OAuth20DiscoveryApi* | [**handleOptions**](#handleoptions) | **OPTIONS** /.well-known/oauth-authorization-server | Probe the discovery endpoint |
| *OAuth20ScopeManagementApi* | [**getScopes**](#getscopes) | **GET** /api/2.0/oauth2/scopes | List available OAuth2 scopes |



## OAuth20AuthorizationApi

### authorizeOAuth

> authorizeOAuth(response\_type, client\_id, redirect\_uri, scope)

`GET /oauth2/authorize`

Start the authorization flow

Starts the OAuth2 authorization code flow for the client named by client_id. The caller has to present the portal signature cookie, and a request without a valid one is not refused with 401 or 403 but redirected to the portal login page, carrying the client ID so the flow can resume after signing in. When the user has not yet consented to the requested scopes the browser is redirected to the consent page; once the consent exists the browser is redirected to the client's redirect URI with the authorization code and, when one was sent, the original state. A caller that cannot follow redirects may send the X-Disable-Redirect header, and then the response is 200 with an empty body and the target URL in the X-Redirect-URI header. The code returned here is exchanged for tokens at the token endpoint.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **response\_type** | query | **String** | The OAuth 2.0 response type. Only code is supported: this server issues an authorization code, never a token, from this endpoint. | [required] [example: `code`] |
| **client\_id** | query | **String** | The identifier the client was given when it was registered. It selects both the client shown on the consent screen and the set of redirect URIs the request is checked against. | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **redirect\_uri** | query | **String** | Where to send the user once authorization is complete. It has to be one of the redirect URIs registered for the client, otherwise the request is refused. | [required] [example: `https://example.com`] |
| **scope** | query | **String** | The permissions being asked for, as a space-separated list. Every scope has to be one the client is registered for, and the consent screen lists exactly these. | [required] [example: `files:read`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **302** | Redirect to the login page, to the consent page, or back to the client's redirect URI with an authorization code | - | - |
| **200** | Returned instead of the redirect when the request carries the X-Disable-Redirect header: the target URL is sent in the X-Redirect-URI response header and the body is empty | - | - |
| **400** | Invalid request parameters | - | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### exchangeToken

> exchangeToken_200_response exchangeToken(grant\_type, code, redirect\_uri, client\_id, client\_secret)

`POST /oauth2/token`

Exchange the authorization code

Exchanges an authorization code for an access token. The request is form-encoded and has to carry the grant type, the code, the same redirect URI that was used to obtain the code, and the client credentials: the client authenticates itself here rather than through the portal signature cookie the authorization endpoint uses. The response carries the access token, its type and its lifetime in seconds, plus a refresh token when the client is configured for the refresh token grant. Client authentication that fails is answered with 401, while a malformed, unknown or expired code is answered with 400. The code is single use, so replaying it fails.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **grant\_type** | form | **String** | Which exchange is being performed: authorization_code to redeem a code, refresh_token to renew an access token. | [optional] |
| **code** | form | **String** | The authorization code returned by the authorization endpoint. It may be redeemed once. | [optional] |
| **redirect\_uri** | form | **String** | The same redirect URI that was used to obtain the code. The exchange fails when it differs. | [optional] |
| **client\_id** | form | **String** | The identifier of the client redeeming the code. | [optional] |
| **client\_secret** | form | **String** | The secret of the client redeeming the code. It is omitted by a public client, which proves itself with a PKCE code verifier instead. | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully exchanged authorization code for access token | [**exchangeToken_200_response**](#model-exchangetoken-200-response) | - |
| **400** | Invalid request parameters | - | - |
| **401** | Client authentication failed: the client ID is unknown or the client secret does not match | - | - |

#### Return type

[**exchangeToken_200_response**](#model-exchangetoken-200-response)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

### submitConsent

> submitConsent(client\_id, state, scope)

`POST /oauth2/authorize`

Submit the consent decision

Submits the user's consent decision for the scopes an authorization request asked for. It is the form post the consent page makes, so it carries the client ID, the state and the agreed scopes as multipart form data, along with the same portal signature cookie the authorization request needed. On success the browser is redirected to the client's redirect URI with an authorization code, or, when the request carries the X-Disable-Redirect header, answered 200 with that URL in the X-Redirect-URI header. The consent is stored per user and client, so a later authorization request for the same scopes no longer stops at the consent page.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **client\_id** | form | **String** | The client the consent is being given to. It has to be the same client the authorization request named. | [optional] |
| **state** | form | **String** | The opaque value carried through from the authorization request, returned unchanged on the redirect so the client can match the answer to its request. | [optional] |
| **scope** | form | **String** | The scopes the user agreed to, as a space-separated list. Anything the user declined is left out, so this may be narrower than what was requested. | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **302** | Redirect to the client's redirect URI with authorization code | - | - |
| **200** | Returned instead of the redirect when the request carries the X-Disable-Redirect header: the target URL is sent in the X-Redirect-URI response header and the body is empty | - | - |
| **400** | Invalid request parameters | - | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

## OAuth20ClientManagementApi

### changeActivation

> changeActivation(clientId, ChangeClientActivationRequest)

`PATCH /api/2.0/oauth2/clients/{clientId}/activation`

Change client activation status

Enables or disables an existing client and answers 200 with an empty body. A disabled client can no longer obtain new tokens, but the tokens and consents it already holds stay valid until they expire on their own: disable a client to stop new authorizations, delete it to end the existing ones. An administrator may change any client of the tenant, a plain user only the clients they created. The body carries the single activation flag, and a client the caller may not see is reported as not found rather than as forbidden.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to change activation for | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |
| **ChangeClientActivationRequest** | body | [**ChangeClientActivationRequest**](#model-changeclientactivationrequest) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client activation status successfully changed | - | - |
| **400** | The client ID is blank, or the activation status is missing | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to change client activation | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **415** | The Content-Type header is not application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### createClient

> ClientResponse createClient(CreateClientRequest)

`POST /api/2.0/oauth2/clients`

Create a new OAuth2 client

Registers a new OAuth2 client in the caller's tenant and returns it. The body must carry a name, a description, a logo and at least one redirect URI, allowed origin and scope, and every scope named must already exist in the tenant's scope catalogue. Administrators and users may both register clients; the caller is recorded as the creator, which is what later restricts a plain user to the clients they created. The response is the stored client with its generated client ID and secret, and it is the first place either value can be read. Some deployments cap how many clients one tenant may hold, and reaching that cap is reported as 400 together with the validation failures.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateClientRequest** | body | [**CreateClientRequest**](#model-createclientrequest) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **201** | Client successfully created | [**ClientResponse**](#model-clientresponse) | - |
| **400** | Missing required fields, validation failed, an unknown scope was requested, or the client limit for this tenant has been reached | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to create client | [**ProblemDetail**](#model-problemdetail) | - |
| **415** | The Content-Type header is not application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**ClientResponse**](#model-clientresponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### deleteClient

> deleteClient(clientId)

`DELETE /api/2.0/oauth2/clients/{clientId}`

Delete an OAuth2 client

Deletes one client from the tenant permanently and answers 200 with an empty body. An administrator may delete any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The authorizations and consents issued for the client are removed too, but that cleanup is driven by a message and completes on the authorization service after this call has already returned. A delete that removes no row answers 400. The operation cannot be undone.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to delete | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully deleted | - | - |
| **400** | The client ID is blank, or the client could not be deleted | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to delete client | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### deleteTenantClients

> deleteTenantClients()

`DELETE /api/2.0/oauth2/clients/tenant`

Delete all tenant OAuth2 clients

Deletes every client registered in the current tenant and answers 200 with an empty body. Only an administrator may call it - for a plain user or a guest it is refused with 403 - and it removes the clients of all users of the tenant, not only those of the caller. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant's client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully deleted | - | - |
| **400** | The clients could not be deleted because of concurrent modification | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to delete tenant clients | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### deleteUserClients

> deleteUserClients()

`DELETE /api/2.0/oauth2/clients`

Delete all user OAuth2 clients

Deletes every client the calling user created in the current tenant and answers 200 with an empty body. The caller's own identity always selects the set, so this never reaches clients created by somebody else, not even for an administrator. The authorizations and consents of the deleted clients are cleaned up asynchronously on the authorization service, and the tenant's client cache is dropped as part of the call. Concurrent modification that survives the retries is reported as 400. The operation cannot be undone, and the response does not say how many clients were removed.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully deleted | - | - |
| **400** | The clients could not be deleted because of concurrent modification | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to delete user clients | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### regenerateSecret

> ClientSecretResponse regenerateSecret(clientId)

`PATCH /api/2.0/oauth2/clients/{clientId}/regenerate`

Regenerate client secret

Issues a new secret for the client and returns it. The previous secret stops working as soon as this call succeeds, there is no grace period and no way to recover it, so every deployed copy of the client has to be updated with the value returned here. An administrator may do this for any client of the tenant, a plain user only for the clients they created. Tokens already issued to the client keep working; only future client authentication is affected. The response carries the new secret and nothing else.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to regenerate secret for | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client secret successfully regenerated | [**ClientSecretResponse**](#model-clientsecretresponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to regenerate client secret | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**ClientSecretResponse**](#model-clientsecretresponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### revokeUserClient

> revokeUserClient(clientId)

`DELETE /api/2.0/oauth2/clients/{clientId}/revoke`

Revoke client consent

Revokes the calling user's own consent for one client and answers 200 with an empty body. It touches only the caller's grant: other users keep their consents and the client itself stays registered. Guests may call it as well as users and administrators, because it can never reach anyone else's data. The revocation is carried out by the authorization service over gRPC, so a service that reports nothing was revoked produces 400 and a service that cannot be reached produces 503. Once it succeeds the user has to authorize the client again before it can act on their behalf.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to revoke consent for | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client consent successfully revoked | - | - |
| **400** | The client ID is blank, or the authorization service reported that the consent was not revoked | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to revoke consent | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **503** | Authorization service unavailable | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### updateClient

> updateClient(clientId, UpdateClientRequest)

`PUT /api/2.0/oauth2/clients/{clientId}`

Update an existing OAuth2 client

Updates the mutable settings of an existing client and answers 200 with an empty body. Only the fields carried in the request body change; the client ID, the secret, the tenant and the creator cannot be changed this way. An administrator may update any client of the tenant, a plain user only the clients they created, and a client the caller may not see is reported as not found rather than as forbidden. The write runs under optimistic locking and is retried a few times, so a request that still loses the race is rejected with 400 instead of silently overwriting a concurrent change. Nothing is returned in the body - read the client back to see the stored result.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to update | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |
| **UpdateClientRequest** | body | [**UpdateClientRequest**](#model-updateclientrequest) |  | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client successfully updated | - | - |
| **400** | Missing required fields, validation failed, or the client could not be updated because of concurrent modification | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to update client | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **415** | The Content-Type header is not application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

null (empty response body)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## OAuth20ClientQueryingApi

### getClient

> ClientResponse getClient(clientId)

`GET /api/2.0/oauth2/clients/{clientId}`

Get client details

Returns the whole stored record of one client: its name and description, its secret, scopes, redirect URIs, allowed origins, logout redirect URIs and audit fields. An administrator sees any client of the tenant, a plain user only the clients they created, and a guest none of them. Whatever the caller may not see is reported as 404 rather than 403, so absence and lack of access are deliberately indistinguishable, and an identifier that is not a valid client ID is reported the same way. The response is a single object, not a collection.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to retrieve | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client details successfully retrieved | [**ClientResponse**](#model-clientresponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to view client | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**ClientResponse**](#model-clientresponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getClientInfo

> ClientInfoResponse getClientInfo(clientId)

`GET /api/2.0/oauth2/clients/{clientId}/info`

Get client info

Retrieves the detailed information for a client with the ID specified in the request. It returns the consent-facing subset of the client - name, description, logo, the website, terms and policy URLs, authentication methods and scopes - and deliberately omits the secret, the redirect URIs and the allowed origins, which is what makes it safe to render on a consent screen. An administrator sees any client of the tenant, a plain user only the clients they created, and a guest none of them. A client the caller may not see is reported as 404, exactly like an unknown one.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to retrieve | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved client info | [**ClientInfoResponse**](#model-clientinforesponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to view client information | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID is visible to the caller, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**ClientInfoResponse**](#model-clientinforesponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getClients

> PageableClientResponse getClients(limit, last\_client\_id, last\_created\_on)

`GET /api/2.0/oauth2/clients`

List clients

Returns one page of the tenant's clients, newest first, each in the same full form as the single-client read. An administrator sees every client of the tenant, a plain user only the clients they created. Paging is keyset-based rather than offset-based: limit sets the page size, and last_client_id and last_created_on are carried over from the previous page to ask for the next one. The limit defaults to 30 and has to lie between 1 and 50; a value outside that range, or a last_created_on that cannot be parsed as a date, is rejected with 400.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **limit** | query | **Integer** (int32) | How many entries to return, between 1 and 50. Defaults to 30 when omitted. | [optional] [example: `30`] [default to `30`] [min: 1] [max: 50] |
| **last\_client\_id** | query | **String** | ID of the last retrieved client | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | query | **Date** (date-time) | Date of the last retrieved client | [optional] [example: `2024-04-04T12:00:00Z`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Client list successfully retrieved | [**PageableClientResponse**](#model-pageableclientresponse) | - |
| **400** | Invalid pagination parameters, including a last_created_on that cannot be parsed as a date-time | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to list clients | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**PageableClientResponse**](#model-pageableclientresponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getClientsInfo

> PageableClientInfoResponse getClientsInfo(limit, last\_client\_id, last\_created\_on)

`GET /api/2.0/oauth2/clients/info`

List client info

Retrieves a paginated list of information for all clients, each in the same consent-facing form as the single-client info read. An administrator sees every client of the tenant, a plain user only the clients they created. Paging is keyset-based: limit sets the page size, and last_client_id and last_created_on are carried over from the previous page. Unlike the full client listing, limit has no default here - it has to be supplied on every call and has to lie between 1 and 50, and a missing or out-of-range value is rejected with 400.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **limit** | query | **Integer** (int32) | How many entries to return, between 1 and 50. It has no default and has to be sent on every call. | [required] [example: `30`] [min: 1] [max: 50] |
| **last\_client\_id** | query | **String** | ID of the last retrieved client | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | query | **Date** (date-time) | Date of the last retrieved client | [optional] [example: `2024-04-04T12:00:00Z`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved clients info | [**PageableClientInfoResponse**](#model-pageableclientinforesponse) | - |
| **400** | The limit parameter is missing, is outside the range 1-50, or last_created_on cannot be parsed as a date-time | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | Insufficient permissions to list client information | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**PageableClientInfoResponse**](#model-pageableclientinforesponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getConsents

> PageableModificationResponse getConsents(limit, last\_modified\_on)

`GET /api/2.0/oauth2/clients/consents`

List user consents

Retrieves a paginated list of user consents: the clients the calling user has authorized, each with the scopes granted, the moment the consent was last changed and the client's consent-facing details. It always reports the caller's own consents and nothing else - there is no role check on this endpoint, so guests may call it too, and no parameter widens it to another user. The consents are read from the authorization service over gRPC, so an authorization service that cannot be reached surfaces as 503. Paging is keyset-based on last_modified_on, and limit has no default: it has to be supplied on every call and has to lie between 1 and 50.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **limit** | query | **Integer** (int32) | How many entries to return, between 1 and 50. It has no default and has to be sent on every call. | [required] [example: `30`] [min: 1] [max: 50] |
| **last\_modified\_on** | query | **Date** (date-time) | Date of the last retrieved consent | [optional] [example: `2024-04-04T12:00:00Z`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved user consents | [**PageableModificationResponse**](#model-pageablemodificationresponse) | - |
| **400** | The limit parameter is missing, is outside the range 1-50, or last_modified_on cannot be parsed as a date-time | [**ProblemDetail**](#model-problemdetail) | - |
| **403** | The request carries no valid portal signature | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **503** | Authorization service unavailable | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**PageableModificationResponse**](#model-pageablemodificationresponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getPublicClientInfo

> ClientInfoResponse getPublicClientInfo(clientId)

`GET /api/2.0/oauth2/clients/{clientId}/public/info`

Get public client info

Returns the same consent-facing client information as the signed read, but without requiring a portal signature. It is meant for a login or consent page that has to render the client before the user is known, so it resolves the client by ID alone: there is no authentication, no tenant scoping and no creator check, and any caller who knows a client ID can read that client's public details. It still exposes no secret, no redirect URIs and no allowed origins. Being unauthenticated it is rate-limited on a separate, tighter budget than the signed endpoints. An unknown client ID, and an identifier that is not a client ID at all, are both reported as 404.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **clientId** | path | **String** | ID of the client to retrieve | [required] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] [minLength: 1] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully retrieved client public info | [**ClientInfoResponse**](#model-clientinforesponse) | - |
| **400** | The client ID is blank or contains only whitespace | [**ProblemDetail**](#model-problemdetail) | - |
| **404** | No client with this ID exists, or the ID cannot be parsed as a client ID | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**ClientInfoResponse**](#model-clientinforesponse)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## OAuth20DiscoveryApi

### handleOptions

> handleOptions()

`OPTIONS /.well-known/oauth-authorization-server`

Probe the discovery endpoint

Answers the CORS preflight for the OAuth 2.0 Authorization Server metadata endpoint. The endpoint needs no authentication and reads nothing from the request: it always answers 200 with an empty body, and the CORS headers are added by the surrounding filter chain rather than by this handler. It changes no state, and it does not return the authorization server metadata document - issue a GET against the same path for that.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Preflight accepted; the response carries no body | - | - |

#### Return type

null (empty response body)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## OAuth20ScopeManagementApi

### getScopes

> List getScopes()

`GET /api/2.0/oauth2/scopes`

List available OAuth2 scopes

Retrieves a list of all available OAuth2 scopes for the specified tenant. The scopes define the permissions that can be requested by OAuth2 clients. The list is ordered alphabetically, with the 'openid' scope always appearing first. It is a read-only catalogue that does not depend on which clients exist: a valid portal signature is the only requirement, with no role restriction, and every caller of the portal sees the same list.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Scopes successfully retrieved | [**List**](#model-scoperesponse) | - |
| **403** | Insufficient permissions to list scopes | [**ProblemDetail**](#model-problemdetail) | - |
| **406** | The Accept header does not allow application/json | [**ProblemDetail**](#model-problemdetail) | - |
| **429** | Too many requests - rate limit exceeded | [**ProblemDetail**](#model-problemdetail) | - |
| **500** | Internal server error occurred | [**ProblemDetail**](#model-problemdetail) | - |
| **405** | The HTTP method is not allowed for this path | [**ProblemDetail**](#model-problemdetail) | - |

#### Return type

[**List**](#model-scoperesponse)

#### Authorization

[x-signature](#x-signature)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## Models


### Model ChangeClientActivationRequest
Client activation change request

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | **Boolean** | Whether the client may obtain tokens from now on. Sending false leaves the registration and the already issued tokens in place but refuses new authorization requests; sending true allows them again. | [required] [example: `true`] |


### Model ClientInfoResponse
The consent-facing subset of a client: everything needed to render a consent screen, and nothing that would let a caller act as the client.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen, between 3 and 256 characters. | [optional] [example: `Example Name`] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Example Description`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [optional] |
| **client\_id** | **String** | The generated identifier of the client, sent as client_id in every OAuth2 request. It is assigned when the client is registered and never changes afterwards. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **website\_url** | **String** | The URL of the client home page, offered to the user before they consent. | [optional] [example: `http://example.com`] |
| **terms\_url** | **String** | The URL of the client terms of service, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **policy\_url** | **String** | The URL of the client privacy policy, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted, the whole string may not exceed 2000000 characters and the decoded image may not exceed 256000 bytes. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] |
| **authentication\_methods** | **Set** | How the client authenticates itself at the token endpoint: client_secret_post for a confidential client that sends its secret, none for a public client that proves itself with PKCE instead. | [optional] |
| **created\_on** | **Date** (date-time) | When the client was registered, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **created\_by** | **String** | The identifier of the user who registered the client. A plain user may read and change only the clients where this is their own identifier. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **modified\_on** | **Date** (date-time) | When the client was last changed, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **modified\_by** | **String** | The identifier of the user who last changed the client. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registered it. | [optional] [example: `false`] |


### Model ClientResponse
The whole stored record of an OAuth2 client, including the secret and every address the client is allowed to use.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen, between 3 and 256 characters. | [optional] [example: `Example Name`] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Example Description`] |
| **tenant** | **Long** (int64) | The identifier of the portal the client belongs to. A client is visible only inside its own tenant, apart from the unauthenticated public info read. | [optional] [example: `1`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [optional] |
| **enabled** | **Boolean** | Whether the client may currently obtain tokens. A disabled client keeps its registration and the tokens already issued to it, but new authorization requests for it are refused. | [optional] [example: `true`] |
| **client\_id** | **String** | The generated identifier of the client, sent as client_id in every OAuth2 request. It is assigned when the client is registered and never changes afterwards. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **client\_secret** | **String** | The client secret, which the client presents at the token endpoint when it authenticates with client_secret_post. It is omitted from the response rather than sent as null when the client has none. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **website\_url** | **String** | The URL of the client home page, offered to the user before they consent. | [optional] [example: `http://example.com`] |
| **terms\_url** | **String** | The URL of the client terms of service, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **policy\_url** | **String** | The URL of the client privacy policy, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted, the whole string may not exceed 2000000 characters and the decoded image may not exceed 256000 bytes. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] |
| **authentication\_methods** | **Set** | How the client authenticates itself at the token endpoint: client_secret_post for a confidential client that sends its secret, none for a public client that proves itself with PKCE instead. | [optional] |
| **redirect\_uris** | **Set** | The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses. | [optional] |
| **allowed\_origins** | **Set** | The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses. | [optional] |
| **logout\_redirect\_uris** | **Set** | The URIs the user may be sent back to once they have logged out. | [optional] |
| **created\_on** | **Date** (date-time) | When the client was registered, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **created\_by** | **String** | The identifier of the user who registered the client. A plain user may read and change only the clients where this is their own identifier. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **modified\_on** | **Date** (date-time) | When the client was last changed, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **modified\_by** | **String** | The identifier of the user who last changed the client. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registered it. | [optional] [example: `false`] |


### Model ClientSecretResponse
The response carrying a regenerated client secret.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **client\_secret** | **String** | The newly generated client secret. It replaces the previous one immediately, so every deployed copy of the client has to be updated with this value. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |


### Model CreateClientRequest
Client creation request containing client details

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen. It has to be between 3 and 256 characters long. | [required] [example: `Example Client`] [minLength: 3] [maxLength: 256] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Description of the client`] [minLength: 0] [maxLength: 255] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted, the whole string may not exceed 2000000 characters and the decoded image may not exceed 256000 bytes. | [required] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] [minLength: 1] [pattern: `/^data:image\/(?:png\|jpeg\|jpg\|svg\\+xml);base64,.*.{1,}/`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [required] |
| **allow\_pkce** | **Boolean** | Whether the client may use PKCE. Turning it on lets the client authenticate with the none method and prove itself with a code verifier instead of sending a secret, which is what a client that cannot keep a secret needs. | [optional] [example: `true`] |
| **website\_url** | **String** | The URL of the client home page, offered to the user before they consent. The value has to be an http or https URL. | [required] [example: `http://example.com`] [minLength: 1] [pattern: `/^(https?:\/\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$\|^https?:\/\/(\\d{1,3}\\.){3}\\d{1,3}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$/`] |
| **terms\_url** | **String** | The URL of the client terms of service, linked from the consent screen. The value has to be an http or https URL. | [required] [example: `http://example.com/terms`] [minLength: 1] [pattern: `/^(https?:\/\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$\|^https?:\/\/(\\d{1,3}\\.){3}\\d{1,3}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$/`] |
| **policy\_url** | **String** | The URL of the client privacy policy, linked from the consent screen. The value has to be an http or https URL. | [required] [example: `http://example.com/policy`] [minLength: 1] [pattern: `/^(https?:\/\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$\|^https?:\/\/(\\d{1,3}\\.){3}\\d{1,3}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$/`] |
| **redirect\_uris** | **Set** | The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses. | [required] |
| **allowed\_origins** | **Set** | The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses. | [required] |
| **logout\_redirect\_uri** | **String** | The single URI the user may be sent back to once they have logged out. The value has to be an http or https URL. | [required] [example: `http://example.com/logout`] [minLength: 1] [pattern: `/^(https?:\/\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$\|^https?:\/\/(\\d{1,3}\\.){3}\\d{1,3}(:\\d+)?(\/[a-zA-Z0-9-._~:\/?#\\[\\]@!$&'()*+,;=]*)?$/`] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registers it. | [optional] [example: `false`] |


### Model FieldError
Field specific validation error

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **field** | **String** | The name of the field that failed validation | [optional] [example: `policy_url`] |
| **code** | **String** | Error code for localization purposes | [optional] [example: `InvalidPolicyUrl`] |
| **message** | **String** | Human readable error message | [optional] [example: `policy url is expected to be passed as url`] |


### Model PageableClientInfoResponse
One page of consent-facing client info together with the next-page cursor.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | [**List**](#model-clientinforesponse) | The items on this page, at most as many as the requested limit. An empty array means there is nothing further to read. | [optional] |
| **limit** | **Integer** (int32) | The page size that was applied to this request, between 1 and 50. | [optional] [example: `50`] |
| **last\_client\_id** | **String** | The cursor to send back as last_client_id to ask for the next page, together with last_created_on. It is null when the page is empty. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | **Date** (date-time) | The cursor to send back as last_created_on to ask for the next page, together with last_client_id. It is null when the page is empty. | [optional] [example: `2024-04-04T12:00:00Z`] |


### Model PageableClientResponse
One page of full client records together with the next-page cursor.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | [**List**](#model-clientresponse) | The items on this page, at most as many as the requested limit. An empty array means there is nothing further to read. | [optional] |
| **limit** | **Integer** (int32) | The page size that was applied to this request, between 1 and 50. | [optional] [example: `50`] |
| **last\_client\_id** | **String** | The cursor to send back as last_client_id to ask for the next page, together with last_created_on. It is null when the page is empty. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **last\_created\_on** | **Date** (date-time) | The cursor to send back as last_created_on to ask for the next page, together with last_client_id. It is null when the page is empty. | [optional] [example: `2024-04-04T12:00:00Z`] |


### Model PageableModificationResponse
One page of results ordered by modification time, together with the cursor that asks for the next page.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **limit** | **Integer** (int32) | The page size that was applied to this request, between 1 and 50. | [optional] [example: `50`] |
| **last\_modified\_on** | **Date** (date-time) | The cursor to send back as last_modified_on to ask for the next page. It is null when the page is empty. | [optional] [example: `2024-04-04T12:00:00Z`] |


### Model ProblemDetail
RFC 7807 problem details returned by the registration API for failed requests.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **URI** (uri) | A URI reference that identifies the problem type. This service sets it to the DocSpace API getting-started page. | [optional] |
| **title** | **String** | A short, human-readable summary of the problem type, typically the HTTP status reason phrase. | [optional] |
| **status** | **Integer** (int32) | The HTTP status code for this occurrence of the problem. | [optional] |
| **detail** | **String** | A human-readable explanation specific to this occurrence of the problem. | [optional] |
| **instance** | **URI** (uri) | A URI reference that identifies the specific occurrence, set to the request path. | [optional] |
| **properties** | **Map** | Extension members carried on the problem. Usually empty; validation failures also surface as the top-level errors array. | [optional] |
| **errors** | [**List**](#model-fielderror) | Field-specific validation errors. Present when the request body or parameters failed validation, or when a named scope is not in the tenant catalogue. | [optional] |


### Model ScopeResponse
One scope from the tenant scope catalogue, as it may be requested by a client.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The scope exactly as it is written in an authorization request, for example files:read or openid. | [optional] [example: `files:read`] |
| **group** | **String** | The area of the portal the scope belongs to, which is what groups the scopes on the consent screen: files, rooms, contacts, profiles or openid. | [optional] [example: `files`] |
| **type** | **String** | What the scope allows inside its group: read for read-only access, write for changes, and openid for the identity scope itself. | [optional] [example: `read`] |


### Model UpdateClientRequest
Client update request containing modified client details

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen. It has to be between 3 and 256 characters long. | [required] [example: `Updated Client`] [minLength: 3] [maxLength: 256] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Updated description of the client`] [minLength: 0] [maxLength: 255] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted. | [required] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] [minLength: 1] [pattern: `/^data:image\/(?:png\|jpeg\|jpg\|svg\\+xml);base64,.*.{1,}/`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [required] |
| **allow\_pkce** | **Boolean** | Whether the client may use PKCE. Turning it on lets the client authenticate with the none method and prove itself with a code verifier instead of sending a secret, which is what a client that cannot keep a secret needs. | [optional] [example: `true`] |
| **allowed\_origins** | **Set** | The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses. | [required] |
| **redirect\_uris** | **Set** | The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses. | [required] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registers it. | [optional] [example: `false`] |


### Model exchangeToken 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **access\_token** | **String** | The token to send as a Bearer credential when calling the portal on the user behalf. | [optional] [example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`] |
| **token\_type** | **String** | How the access token is to be presented. It is always Bearer. | [optional] [example: `Bearer`] |
| **expires\_in** | **Integer** | How many seconds the access token stays valid, counted from the moment it was issued. | [optional] [example: `3600`] |
| **refresh\_token** | **String** | The token that buys a new access token once the current one expires. It is present only when the client is registered for the refresh token grant. | [optional] [example: `def502...`] |


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

