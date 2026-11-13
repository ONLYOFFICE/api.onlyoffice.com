# uploadAndInitializeMigration

> uploadAndInitializeMigration(migratorName)

`POST /api/2.0/migration/init/{migratorName}`

Parse migration archive

Starts a job that reads the uploaded backup of the portal with the migrator named in the path. The job lists the users, the groups, and the archives it cannot open. Users without an email and users that already exist come in lists of their own. First, call `migrationFileUpload.ashx` with `Init=true`. This opens a new upload folder and deletes the previous one. Then post each part of the archive to it with `Name` set to the file name. Take `migratorName` from `GET api/2.0/migration/list`. Requires a DocSpace admin. Other callers get 403. The call only queues the job and returns an empty body immediately. Repeat `GET api/2.0/migration/status` until `isCompleted` is true. Then read the result from `parseResult` and any failure from `error`. The job changes nothing on the portal. To import, edit `parseResult` and send it to `POST api/2.0/migration/migrate`. A portal runs one job at a time. While a parse or an import runs, the call does nothing and reports nothing. After the job ends, a repeated call starts a new parse. A failed parse deletes the backup, so upload it again first. If the backup is larger than the storage quota of the portal, the job ends with an error.

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
