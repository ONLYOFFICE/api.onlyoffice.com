# uploadAndInitializeMigration

> uploadAndInitializeMigration(migratorName)

`POST /api/2.0/migration/init/{migratorName}`

Parse migration archive

Queues a pass that reads the backup already uploaded for this portal with the migrator named in the path and reports what it holds - the users, the users that carry no email address, the users that exist on this portal already, the groups and the archives it could not open - so that the caller can choose what to import. Upload the backup first: `migrationFileUpload.ashx?Init=true` opens a new upload folder and drops the previous one, then every part of the archive is posted to the same handler with `Name` set to its file name; take `migratorName` from `GET api/2.0/migration/list`. A DocSpace administrator is required. The call only queues the job and answers at once with an empty body: poll `GET api/2.0/migration/status` until `isCompleted` is true, then read what was found from `parseResult` and any failure from `error`. Nothing is imported here and the portal is not changed - the parse result is the body to edit and send to `POST api/2.0/migration/migrate`. A portal runs one job at a time, so a call made while another parse or import is still running is ignored instead of reported, and a backup bigger than the portal's total storage quota ends the job with an error rather than failing this call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **migratorName** | path | **String** | The migrator that knows the format of the uploaded backup. It has to be one of the names `GET api/2.0/migration/list` reports for this installation, spelled exactly as listed. | [required] [example: `GoogleWorkspace`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The parse job has been queued; the response carries no content and the result is read from `GET api/2.0/migration/status` | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](migration.md#basic), [OAuth2](migration.md#oauth2) (scopes: read, write), [ApiKeyBearer](migration.md#apikeybearer), [asc_auth_key](migration.md#asc_auth_key), [Bearer](migration.md#bearer), [OpenId](migration.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
