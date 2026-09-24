# getAllBackupStorages

> StorageArrayWrapper getAllBackupStorages(Dump)

`GET /api/2.0/settings/storage/backup`

Get the backup storages

Returns the storages that can hold portal backups, with the one the saved backup schedule writes to marked as `current` and its parameters filled in from that schedule; when no schedule is saved, or when the schedule stores backups somewhere else than a third-party provider, none of the entries is current. Each entry has the same shape as in `GET api/2.0/settings/storage`: identifier, title, the authentication keys the provider expects, and `isSet` telling whether those keys are filled in on the server. Pass `dump=true` to read the schedule of the whole server instead of the one of the current portal, which only makes sense on a server installation. The caller needs the permission to edit portal settings, which in practice means the portal owner or a DocSpace admin, and on an installation that is not a server one the call is also refused unless backup is available there. Nothing is written and the call is safe to repeat. This operation says nothing about where the portal data itself lives; the backup schedule is configured through the backup API, and the storage of the documents through `PUT api/2.0/settings/storage`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Dump** | query | **Boolean** | Whether the schedule of the whole server is read instead of the one of the current portal. It only changes which schedule marks an entry as `current`; the list of storages itself is the same either way, and the flag makes sense only on a self-hosted installation. | [optional] [example: `true`] |

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
