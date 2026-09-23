# getBackupsCounts

Referenced types are defined in the [full reference](../backup.md).

> BackupsCountResultWrapper getBackupsCounts(from, to, paid)

`GET /api/2.0/backup/getbackupscountbypaid`

Get free and paid backup counts

Counts the backups of the current portal created within a period and splits the result into the ones covered by the free monthly allowance and the ones charged to the portal wallet, which saves calling `GET api/2.0/backup/getbackupscount` twice. The `paid` query parameter is accepted but not read here: the answer always carries both figures. The period behaves as it does for `GET api/2.0/backup/getbackupscount` - it defaults to the current calendar month, both bounds are UTC and inclusive, and a `from` later than `to` is rejected. The counts are over history records rather than over stored archives, so they include backups that have already been deleted.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **from** | query | **Date** (date-time) | The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar month at 00:00 UTC, and it has to be no later than `to`. | [optional] [example: `2026-03-01T00:00:00Z`] |
| **to** | query | **Date** (date-time) | The end of the period, in UTC and inclusive. It defaults to the moment of the call. | [optional] [example: `2026-03-31T23:59:59Z`] |
| **paid** | query | **Boolean** | Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly allowance when false, which is the default. It is read only by `GET api/2.0/backup/getbackupscount` and is ignored by `GET api/2.0/backup/getbackupscountbypaid`, which always reports both. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of free and of paid backups created within the period | [**BackupsCountResultWrapper**](../backup.md#model-backupscountresultwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The start of the period is later than its end | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupsCountResultWrapper**](../backup.md#model-backupscountresultwrapper)

## Authorization

[Basic](../backup.md#basic), [OAuth2](../backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](../backup.md#apikeybearer), [asc_auth_key](../backup.md#asc_auth_key), [Bearer](../backup.md#bearer), [OpenId](../backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
