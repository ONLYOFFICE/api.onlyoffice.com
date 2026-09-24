# listMigrations

> STRINGArrayWrapper listMigrations()

`GET /api/2.0/migration/list`

Get available migrators

Lists the source products this installation can import a portal from, as the migrator names every other operation in this group expects. Nothing has to be called first, a DocSpace administrator is required as everywhere here, and the call is read-only and idempotent. The answer is a plain list of names such as `GoogleWorkspace`, `Nextcloud` or `Workspace`, never localized and ordered as the migrators are registered; pass one of them as `migratorName` to `POST api/2.0/migration/init/{migratorName}`, where the match ignores case. The list depends on the installation rather than on the portal, so it does not change while the portal runs, and a name that is not in it is not rejected by the operation that takes it - the queued job ends with the failure reported in `error` of `GET api/2.0/migration/status`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The names of the migrators this installation can import from, in registration order | [**STRINGArrayWrapper**](../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**STRINGArrayWrapper**](../models/string-array-wrapper.md)

## Authorization

[Basic](migration.md#basic), [OAuth2](migration.md#oauth2) (scopes: read, write), [ApiKeyBearer](migration.md#apikeybearer), [asc_auth_key](migration.md#asc_auth_key), [Bearer](migration.md#bearer), [OpenId](migration.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
