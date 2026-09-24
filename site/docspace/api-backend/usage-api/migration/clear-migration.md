# clearMigration

> clearMigration()

`POST /api/2.0/migration/clear`

Clear migration

Discards a finished import and deletes the data uploaded for it, freeing the portal for the next one. Call it once `GET api/2.0/migration/status` reports `isCompleted` for a job whose `parseResult.operation` is `migration`; a DocSpace administrator is required. Only the queued job and the temporary upload folder go - the users, groups and files already imported stay in the portal - so the call destroys migration data alone, and it is idempotent: clearing twice, or with nothing to clear, still answers 200. Like the other write operations here it is only queued, and once it has run `GET api/2.0/migration/status` returns an empty result and `GET api/2.0/migration/logs` answers 404, so download the log before calling it. A parse that is still running is not affected - stop that with `POST api/2.0/migration/cancel` - and `POST api/2.0/migration/finish` performs the same clean-up itself, which makes this call unnecessary after it.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The clean-up has been queued; the finished import is dropped and the uploaded data deleted. The response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
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
