# getAllCdnStorages

Referenced types are defined in the [full reference](../api.md).

> StorageArrayWrapper getAllCdnStorages()

`GET /api/2.0/settings/storage/cdn`

Get the CDN storages

Returns the storages that can serve the static content of the portal through a content delivery network, which is the subset of the providers of `GET api/2.0/settings/storage` that offer a CDN of their own. The entries have the same shape as in the storage listing: identifier and title, the authentication keys the provider expects, `isSet` telling whether those keys are filled in on the server, and `current` marking the CDN the portal uses now. Keys of the current entry come from the saved CDN settings and keys of the others from the provider configuration. An empty list means the build ships no CDN-capable provider, and a list where nothing is current means the portal serves its static content itself. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, on a server installation with an unrestricted access space. Nothing is written and the call is safe to repeat. Use `PUT api/2.0/settings/storage/cdn` to select a CDN and `DELETE api/2.0/settings/storage/cdn` to stop using one.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storages that can serve as the portal CDN, with the one in use marked as current | [**StorageArrayWrapper**](../api.md#model-storagearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings, or this installation does not allow changing the storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StorageArrayWrapper**](../api.md#model-storagearraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
