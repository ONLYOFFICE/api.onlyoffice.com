# updateApiKey

> BooleanWrapper updateApiKey(keyId, UpdateApiKeyRequest)

`PUT /api/2.0/keys/{keyId}`

Update an API key

Renames an API key, replaces its scopes, or turns it on or off. The secret stays the same. Requires the creator of the key or a DocSpace admin. Other callers get 403. The call changes data. You can repeat it with the same body. It changes only the fields in the body. Pass only `*` in `permissions` to remove all scope restrictions. With `isActive` set to false, the key stops authenticating requests but stays in the list. The call returns `true` after a change. For an expired key, it changes nothing and returns `false`. To remove a key for good, use `DELETE api/2.0/keys/{keyId}`. If no key has this ID, the call returns 404. The call returns 400 if the name is empty, has only spaces, or is too long. It also returns 400 if `permissions` is empty or has an unknown scope.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **keyId** | path | **UUID** (uuid) | The ID of the key to update, taken from the route. Read it from the `id` of an entry of `GET api/2.0/keys` - it is not the secret and not the `keyPostfix`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateApiKeyRequest** | body | [**UpdateApiKeyRequest**](../models/update-api-key-request.md) | The fields to change. Every field is optional and the ones that are left out keep their current values, so an empty object changes nothing. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the key was changed, false if it was left untouched because it has already expired | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, the name is empty, made of whitespace only or longer than 30 characters, or the permissions array is empty or contains a scope the portal does not know | - | - |
| **403** | The key belongs to another member and the caller is not a DocSpace admin | - | - |
| **404** | The portal has no key with this ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](api-keys.md#basic), [OAuth2](api-keys.md#oauth2) (scopes: read, write), [ApiKeyBearer](api-keys.md#apikeybearer), [asc_auth_key](api-keys.md#asc_auth_key), [Bearer](api-keys.md#bearer), [OpenId](api-keys.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
