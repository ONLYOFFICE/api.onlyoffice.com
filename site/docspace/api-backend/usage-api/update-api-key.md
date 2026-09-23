# updateApiKey

Referenced types are defined in the [full reference](../people.md).

> BooleanWrapper updateApiKey(keyId, UpdateApiKeyRequest)

`PUT /api/2.0/keys/{keyId}`

Update an API key

Renames an API key, replaces the scopes it may use, or activates and deactivates it, without changing the secret. The caller may update a key they created themselves, and a DocSpace administrator may update any key of the portal. Take the values for `permissions` from `GET api/2.0/keys/permissions`; an unknown scope or an empty array is rejected with 400, and the fields that are left out keep their current values. The answer is a plain boolean: true when the key was changed, and false when it was not - which is also what an already expired key returns, because such a key is left untouched instead of being reported as an error. Deactivating a key through `isActive` stops it from authenticating while keeping it in the list, so use it when the key may be needed again and `DELETE api/2.0/keys/{keyId}` when it may not.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **keyId** | path | **UUID** (uuid) | The ID of the key to update, taken from the route. Read it from the `id` of an entry of `GET api/2.0/keys` - it is not the secret and not the `keyPostfix`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateApiKeyRequest** | body | [**UpdateApiKeyRequest**](../people.md#model-updateapikeyrequest) | The fields to change. Every field is optional and the ones that are left out keep their current values, so an empty object changes nothing. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the key was changed, false if it was left untouched because it has already expired | [**BooleanWrapper**](../people.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The permissions array is empty or contains a scope the portal does not know | - | - |
| **403** | The key belongs to another member and the caller is not a DocSpace admin | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../people.md#model-booleanwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## GroupApi
