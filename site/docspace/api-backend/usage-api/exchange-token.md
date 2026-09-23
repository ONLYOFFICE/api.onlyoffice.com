# exchangeToken

Referenced types are defined in the [full reference](../oauth.md).

> exchangeToken_200_response exchangeToken(grant\_type, code, redirect\_uri, client\_id, client\_secret)

`POST /oauth2/token`

Exchange the authorization code

Exchanges an authorization code for an access token. The request is form-encoded and has to carry the grant type, the code, the same redirect URI that was used to obtain the code, and the client credentials: the client authenticates itself here rather than through the portal signature cookie the authorization endpoint uses. The response carries the access token, its type and its lifetime in seconds, plus a refresh token when the client is configured for the refresh token grant. Client authentication that fails is answered with 401, while a malformed, unknown or expired code is answered with 400. The code is single use, so replaying it fails.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **grant\_type** | form | **String** | Which exchange is being performed: authorization_code to redeem a code, refresh_token to renew an access token. | [optional] |
| **code** | form | **String** | The authorization code returned by the authorization endpoint. It may be redeemed once. | [optional] |
| **redirect\_uri** | form | **String** | The same redirect URI that was used to obtain the code. The exchange fails when it differs. | [optional] |
| **client\_id** | form | **String** | The identifier of the client redeeming the code. | [optional] |
| **client\_secret** | form | **String** | The secret of the client redeeming the code. It is omitted by a public client, which proves itself with a PKCE code verifier instead. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Successfully exchanged authorization code for access token | [**exchangeToken_200_response**](../oauth.md#model-exchangetoken-200-response) | - |
| **400** | Invalid request parameters | - | - |
| **401** | Client authentication failed: the client ID is unknown or the client secret does not match | - | - |

## Return type

[**exchangeToken_200_response**](../oauth.md#model-exchangetoken-200-response)

## Authorization

[cookieAuth](../oauth.md#cookieauth), [bearerAuth](../oauth.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json
