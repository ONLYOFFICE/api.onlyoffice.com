# clearMigration

> clearMigration()

`POST /api/2.0/migration/clear`

Clear migration

Deletes the finished import job of the portal and the backup uploaded for it. Call it after `GET api/2.0/migration/status` reports `isCompleted` for a job whose `parseResult.operation` is `migration`. Requires a DocSpace admin. Other callers get 403. The users, groups, and files already imported stay on the portal. The call only queues the request and returns an empty body. You can repeat it. With nothing to clear, it still returns 200. After it runs, `GET api/2.0/migration/status` returns an empty result. Also, `GET api/2.0/migration/logs` returns 404, so download the log first. The call does not stop a running parse or import. It still deletes the backup they read. To stop a parse, use `POST api/2.0/migration/cancel`. You do not need this call after `POST api/2.0/migration/finish`, which does the same clean-up.

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
