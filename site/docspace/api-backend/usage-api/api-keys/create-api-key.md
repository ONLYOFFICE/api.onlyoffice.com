# createApiKey

> ApiKeyResponseWrapper createApiKey(CreateApiKeyRequestDto)

`POST /api/2.0/keys`

Create a user API key

Creates an API key that authenticates requests as the calling account, and is the only operation that ever returns the secret. Any portal member except a guest may create one; when the portal limits developer tools to administrators, only a DocSpace administrator may call it. The call is not idempotent - every call issues a new key - and it is throttled, so a client that retries on a timeout can end up with several keys. The answer carries the full secret in `key`: it is shown here and never again, later reads expose only the last four characters in `keyPostfix`, so store it now. Pass the scopes the key may use in `permissions`, taking the values from `GET api/2.0/keys/permissions`; pass `*` or omit the field to record a key without scope restrictions, and set `expiresInDays` to make it expire, otherwise it stays valid until it is deleted. An empty `permissions` array and an unknown scope are both rejected with 400. Send the key in the `Authorization` header as `Bearer sk-...` to use it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateApiKeyRequestDto** | body | [**CreateApiKeyRequestDto**](../models/create-api-key-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new API key, with the full secret in the key field | [**ApiKeyResponseWrapper**](../models/api-key-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The permissions array is empty or contains a scope the portal does not know | - | - |
| **403** | The caller is a guest, or the portal limits developer tools to administrators | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
