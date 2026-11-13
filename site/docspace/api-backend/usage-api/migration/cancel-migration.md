# cancelMigration

> cancelMigration()

`POST /api/2.0/migration/cancel`

Cancel migration

Stops the parse job of the portal and deletes the uploaded backup. Use it after a wrong archive or a wrong migrator name. Requires a DocSpace admin. Other callers get 403. The call only queues the request and returns an empty body. Soon after, `GET api/2.0/migration/status` no longer shows the parse. You cannot restore the deleted backup. Before a new parse, upload it to `migrationFileUpload.ashx` again. You can repeat the call. With no parse job, it still returns 200 and deletes the upload folder. The call does not stop an import. It still deletes the backup that the import reads. To delete a finished import, use `POST api/2.0/migration/clear`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The cancellation has been queued; the parse stops and the uploaded backup is deleted. The response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
