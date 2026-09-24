# cancelBackup

> BooleanWrapper cancelBackup()

`POST /api/2.0/backup/cancelbackup`

Cancel the running backup

Drops the backup job of the current portal from the queue, which cancels it if it is still running. The caller needs the portal settings permission. It answers false, not an error, when there is nothing to cancel, so the result says whether a job was actually dropped rather than whether the call succeeded. This affects backup jobs only: a restoring job cannot be cancelled through the API. The cancelled job leaves the queue, so a following `GET api/2.0/backup/getbackupprogress` reports no job at all rather than a job with the `Canceled` status.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if a backup job was dropped from the queue, false if there was nothing to cancel | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
