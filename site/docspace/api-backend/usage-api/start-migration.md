# startMigration

Referenced types are defined in the [full reference](../api.md).

> startMigration(MigrationApiInfo)

`POST /api/2.0/migration/migrate`

Start migration

Starts the import itself: the users, the groups and the files selected in the request body are created on this portal from the backup that the parse pass has read. Run `POST api/2.0/migration/init/{migratorName}` first and wait for `isCompleted` in `GET api/2.0/migration/status`, then send `parseResult` from that answer back here with `shouldImport` set on the users and groups to take and the `import...Files` flags set for the content to copy. A DocSpace administrator is required, and importing a user as `DocSpaceAdmin` additionally requires the caller to be the portal owner unless a user with that email is an administrator of this portal already, otherwise the whole call is rejected with 403 before anything is imported. The job is queued and the call answers with an empty body at once: watch `progress`, `successedUsers`, `failedUsers` and `error` in `GET api/2.0/migration/status` and read what each step did from `GET api/2.0/migration/logs`. The import writes to the portal and cannot be undone, and a repeat is no help: a call made while the job runs is ignored, and once the job has ended the uploaded backup is deleted, so a new call has nothing to read until the archive is uploaded and parsed again. When the import is done, close it with `POST api/2.0/migration/finish`, which can also mail the imported users their activation link.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MigrationApiInfo** | body | [**MigrationApiInfo**](../api.md#model-migrationapiinfo) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The import has been queued; the response carries no content and the progress is read from `GET api/2.0/migration/status` | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body is missing or could not be read as a parse result | - | - |
| **403** | The caller is not a DocSpace administrator, or is not the portal owner and asked to import a user as `DocSpaceAdmin` who is not an administrator of this portal yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
