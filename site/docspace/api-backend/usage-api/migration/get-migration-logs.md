# getMigrationLogs

> getMigrationLogs()

`GET /api/2.0/migration/logs`

Get migration logs

Returns the log of the parse or import job of the portal as a file. The log has a timestamped line for each step, including why the job skipped a user or file. Requires a DocSpace admin. Other callers get 403. The call is read-only. The body is not JSON. It is `text/plain; charset=UTF-8`, sent as the attachment `migration.log`. Each job has its own log, and the call returns the log of the job that `GET api/2.0/migration/status` shows. The portal saves the log only when the job ends. So wait until `isCompleted` is true, since the call fails while the job runs. If the portal has no job, the call returns 404. This happens after `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The log of the current job as a `text/plain` attachment named `migration.log` | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **404** | The portal holds no parse or import whose log could be returned | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](migration.md#basic), [OAuth2](migration.md#oauth2) (scopes: read, write), [ApiKeyBearer](migration.md#apikeybearer), [asc_auth_key](migration.md#asc_auth_key), [Bearer](migration.md#bearer), [OpenId](migration.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
