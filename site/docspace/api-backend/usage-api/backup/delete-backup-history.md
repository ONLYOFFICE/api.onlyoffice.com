# deleteBackupHistory

> BooleanWrapper deleteBackupHistory(Dump)

`DELETE /api/2.0/backup/deletebackuphistory`

Delete the backup history

Deletes every backup of the current portal, both the history records and the archives themselves, and leaves the backup schedule alone. `dump` clears the backups of the whole server instead and requires the space access permission. The records are walked one by one and a failure on any of them is swallowed, so the result is always true even when some archives could not be deleted: it does not mean the history is now empty. Call `GET api/2.0/backup/getbackuphistory` afterwards to see what is left. Each record is removed before its archive, so an archive whose deletion fails stays in the storage with nothing pointing at it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Dump** | query | **Boolean** | Applies the operation to the whole server rather than to the current portal, which requires the space access permission and works on a standalone installation only. Server-wide backups and schedules are kept apart from the ones of a portal, so the two values address different data. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True once every record has been walked, whether or not all of them were deleted | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal subscription has expired or has not been paid | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
