# getMigrationLogs

> getMigrationLogs()

`GET /api/2.0/migration/logs`

Get migration logs

Downloads the log of the parse or import the portal currently holds - the step-by-step record behind the numbers and the single error message of `GET api/2.0/migration/status`, and the place where the reason for a skipped user or file is written. The portal has to hold such a job, started by `POST api/2.0/migration/init/{migratorName}` or `POST api/2.0/migration/migrate` and not yet removed by `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish`, otherwise the call answers 404; a DocSpace administrator is required and the call is read-only and idempotent. The body is not JSON: it is `text/plain; charset=UTF-8` sent as an attachment named `migration.log`, one line per step with the progress it reported. Each job writes its own log, so this always returns the log of the job that `GET api/2.0/migration/status` describes, and while that job runs the file keeps growing - a call made early returns only the part written so far and may be repeated later for the rest.

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
