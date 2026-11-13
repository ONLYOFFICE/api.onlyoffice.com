# getAllBackupStorages

> StorageArrayWrapper getAllBackupStorages(dump)

`GET /api/2.0/settings/storage/backup`

Get the backup storages

Returns the storages that can keep portal backups. The storage of the saved backup schedule is `current`, with its keys from the schedule. If no schedule exists or it uses no third-party storage, no entry is `current`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the installation is not self-hosted and offers no backup, the call also returns 403. The call is read-only. It does not show where the portal keeps its data. To change that storage, use `PUT api/2.0/settings/storage`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **dump** | query | **Boolean** | Whether the schedule of the whole server is read instead of the one of the current portal. It only changes which schedule marks an entry as `current`; the list of storages itself is the same either way, and the flag makes sense only on a self-hosted installation. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The storages that can hold portal backups, with the scheduled one marked as current | [**StorageArrayWrapper**](../../models/storage-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit portal settings, or backup is not available on this installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StorageArrayWrapper**](../../models/storage-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
