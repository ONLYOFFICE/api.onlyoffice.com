# deleteKeys

> deleteKeys(id)

`DELETE /api/2.0/privacyroom/keys/{id}`

Delete an encryption key

Deletes one encryption key pair of the calling user. The other pairs stay unchanged. Any signed-in user can call it, except a guest. A guest gets 403. The deletion cannot be undone, and a repeated call returns 404. The call returns 204 with no body. Before DocSpace 4.0, it returned 200 with the remaining keys. To read the remaining keys, use `GET api/2.0/privacyroom/keys`. After the caller deletes the last key, `GET api/2.0/privacyroom/{roomId}/access` returns 403 for all their private rooms. The rooms and their content stay unchanged. To restore access, create a key with `POST api/2.0/privacyroom/keys`. If the caller has no pair with this `id`, the call returns 404. A malformed `id` returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller's own pairs can be named here. | [required] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **204** | The encryption key is deleted. Answered 200 with the remaining keys before DocSpace 4.0 | - | - |
| **400** | The key identifier is not a valid GUID | - | - |
| **403** | The caller is a guest, who cannot own encryption keys | - | - |
| **404** | The encryption key is not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
