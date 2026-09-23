# getBackupsCount

Referenced types are defined in the [full reference](../backup.md).

> Int32Wrapper getBackupsCount(from, to, paid)

`GET /api/2.0/backup/getbackupscount`

Get the number of backups

Counts the backups of the current portal that were created within a period, and `paid` chooses which kind is counted: false, the default, counts the ones covered by the free monthly allowance, and true counts the ones charged to the portal wallet. The period defaults to the current calendar month - `from` becomes the first day of the month at 00:00 UTC and `to` becomes the moment of the call. Both bounds are UTC and inclusive, and a `from` later than `to` is rejected. Called with no parameters at all, this returns exactly the figure the free monthly allowance is measured against. The count is over history records rather than over stored archives, so it includes backups that have already been deleted; use `GET api/2.0/backup/getbackuphistory` to see what can still be restored.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **from** | query | **Date** (date-time) | The start of the period, in UTC and inclusive. It defaults to the first day of the current calendar month at 00:00 UTC, and it has to be no later than `to`. | [optional] [example: `2026-03-01T00:00:00Z`] |
| **to** | query | **Date** (date-time) | The end of the period, in UTC and inclusive. It defaults to the moment of the call. | [optional] [example: `2026-03-31T23:59:59Z`] |
| **paid** | query | **Boolean** | Counts the backups charged to the portal wallet when true, and the ones covered by the free monthly allowance when false, which is the default. It is read only by `GET api/2.0/backup/getbackupscount` and is ignored by `GET api/2.0/backup/getbackupscountbypaid`, which always reports both. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The number of backups created within the period | [**Int32Wrapper**](../backup.md#model-int32wrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The start of the period is later than its end | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**Int32Wrapper**](../backup.md#model-int32wrapper)

## Authorization

[Basic](../backup.md#basic), [OAuth2](../backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](../backup.md#apikeybearer), [asc_auth_key](../backup.md#asc_auth_key), [Bearer](../backup.md#bearer), [OpenId](../backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
