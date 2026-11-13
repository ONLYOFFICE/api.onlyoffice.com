# getAllStorages

> StorageArrayWrapper getAllStorages()

`GET /api/2.0/settings/storage`

Get the portal storages

Returns the third-party storages that can keep the portal data, such as Amazon S3 or Google Cloud Storage. The built-in local storage is not in the list. If no entry is `current`, the portal keeps its data in the local storage. Each entry shows its keys and whether the server has them set (`isSet`). Keys of the current storage come from the saved settings. Keys of other storages come from the provider configuration and are empty if nobody set them. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call also returns 403 if the installation is not self-hosted or limits the access space. The call is read-only. To switch the storage, use `PUT api/2.0/settings/storage`. To return to the local storage, use `DELETE api/2.0/settings/storage`. For the CDN and backup storages, use `GET api/2.0/settings/storage/cdn` and `GET api/2.0/settings/storage/backup`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storages available to the portal, each marked as configured and as currently in use | [**StorageArrayWrapper**](../../models/storage-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
