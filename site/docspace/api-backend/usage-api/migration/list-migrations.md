# listMigrations

> StringArrayWrapper listMigrations()

`GET /api/2.0/migration/list`

Get available migrators

Returns the names of the source products this installation can import a portal from. Pass a name as `migratorName` to `POST api/2.0/migration/init/{migratorName}`, which ignores case. Requires a DocSpace admin. Other callers get 403. The call is read-only. The names are not localized, for example `GoogleWorkspace` or `Nextcloud`. The list keeps the order in which the installation registers its migrators. It depends on the installation, not on the portal. The parse call does not reject a name outside this list. Instead, its job ends with an error in `GET api/2.0/migration/status`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The names of the migrators this installation can import from, in registration order | [**StringArrayWrapper**](../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringArrayWrapper**](../models/string-array-wrapper.md)

## Authorization

[Basic](migration.md#basic), [OAuth2](migration.md#oauth2) (scopes: read, write), [ApiKeyBearer](migration.md#apikeybearer), [asc_auth_key](migration.md#asc_auth_key), [Bearer](migration.md#bearer), [OpenId](migration.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
