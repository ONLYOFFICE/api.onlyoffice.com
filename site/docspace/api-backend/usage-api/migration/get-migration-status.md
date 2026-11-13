# getMigrationStatus

> MigrationStatusWrapper getMigrationStatus()

`GET /api/2.0/migration/status`

Get migration status

Returns the progress and the result of the parse or import job of the portal. The other operations of this group only queue work, so their outcome appears here. Requires a DocSpace admin. Other callers get 403. The call is read-only. This is the call to poll. Repeat it until `isCompleted` is true. A failed job also sets `isCompleted` to true, so then check `error`. If the portal has no job, the call returns 200 with an empty result. This happens before the first parse and after `POST api/2.0/migration/finish`. To read each step of the job, use `GET api/2.0/migration/logs`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the parse or import queued for the portal, or an empty result when the portal has no job | [**MigrationStatusWrapper**](../models/migration-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MigrationStatusWrapper**](../models/migration-status-wrapper.md)

## Authorization

[Basic](migration.md#basic), [OAuth2](migration.md#oauth2) (scopes: read, write), [ApiKeyBearer](migration.md#apikeybearer), [asc_auth_key](migration.md#asc_auth_key), [Bearer](migration.md#bearer), [OpenId](migration.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
