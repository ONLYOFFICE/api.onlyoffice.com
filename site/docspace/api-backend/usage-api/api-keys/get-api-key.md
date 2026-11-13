# getApiKey

> ApiKeyResponseWrapper getApiKey()

`GET /api/2.0/keys/@self`

Get the current API key

Returns the API key that authenticated this request. So a key holder can read its scopes, expiry, and state without knowing its ID. Send the key in the `Authorization` header as `Bearer sk-...`. Any key can call it, whatever its scopes. If the request uses a cookie or a user token, the call returns 400. The call is read-only. To read other keys, use `GET api/2.0/keys`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The API key that authenticated this request | [**ApiKeyResponseWrapper**](../models/api-key-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request is not authenticated by an API key, as with a session authenticated by a cookie or by a user token | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ApiKeyResponseWrapper**](../models/api-key-response-wrapper.md)

## Authorization

[Basic](api-keys.md#basic), [OAuth2](api-keys.md#oauth2) (scopes: read, write), [ApiKeyBearer](api-keys.md#apikeybearer), [asc_auth_key](api-keys.md#asc_auth_key), [Bearer](api-keys.md#bearer), [OpenId](api-keys.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
