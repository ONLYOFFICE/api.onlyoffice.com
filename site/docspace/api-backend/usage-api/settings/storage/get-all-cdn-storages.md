# getAllCdnStorages

> StorageArrayWrapper getAllCdnStorages()

`GET /api/2.0/settings/storage/cdn`

Get the CDN storages

Returns the storages that can serve the static content of the portal through a CDN. The list has only the providers of `GET api/2.0/settings/storage` that offer a CDN. Each entry shows its keys, whether the server has them set (`isSet`), and whether the portal uses it (`current`). Keys of the current entry come from the saved CDN settings. If no entry is `current`, the portal serves its static content itself. An empty list means that the build has no CDN provider. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call is read-only. To select a CDN, use `PUT api/2.0/settings/storage/cdn`. To stop using one, use `DELETE api/2.0/settings/storage/cdn`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storages that can serve as the portal CDN, with the one in use marked as current | [**StorageArrayWrapper**](../../models/storage-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings, or this installation does not allow changing the storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StorageArrayWrapper**](../../models/storage-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
