# deleteApiKey

Referenced types are defined in the [full reference](../people.md).

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
| **200** | True if the key was removed | [**BooleanWrapper**](../people.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The key belongs to another member and the caller is not a DocSpace admin | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../people.md#model-booleanwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
