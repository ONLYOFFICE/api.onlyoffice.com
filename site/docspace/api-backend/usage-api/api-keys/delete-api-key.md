# deleteApiKey

> BooleanWrapper deleteApiKey(keyId)

`DELETE /api/2.0/keys/{keyId}`

Delete an API key

Deletes the API key with the ID given in the route, so that it stops authenticating requests immediately. The caller may delete a key they created themselves, and a DocSpace administrator may delete any key of the portal. The removal is permanent and cannot be undone: the secret was only ever readable at creation time, so a deleted key cannot be restored and a new one has to be issued through `POST api/2.0/keys`. To stop a key temporarily instead, set `isActive` to false through `PUT api/2.0/keys/{keyId}`. The answer is a plain boolean reporting whether the key was removed.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **keyId** | path | **UUID** (uuid) | The ID of the key to delete, taken from the route. Read it from the `id` of an entry of `GET api/2.0/keys` - it is not the secret and not the `keyPostfix`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the key was removed | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The key belongs to another member and the caller is not a DocSpace admin | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](api-keys.md#basic), [OAuth2](api-keys.md#oauth2) (scopes: read, write), [ApiKeyBearer](api-keys.md#apikeybearer), [asc_auth_key](api-keys.md#asc_auth_key), [Bearer](api-keys.md#bearer), [OpenId](api-keys.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
