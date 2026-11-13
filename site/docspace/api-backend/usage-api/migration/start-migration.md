# startMigration

> startMigration(MigrationApiInfo)

`POST /api/2.0/migration/migrate`

Start migration

Starts the import of the users, groups, and files selected in the body from the parsed backup. First, call `POST api/2.0/migration/init/{migratorName}` and wait until `isCompleted` is true. Then send `parseResult` from `GET api/2.0/migration/status` back here. Mark the users and groups to import with `shouldImport`, and the content with the `import` flags. Requires a DocSpace admin. Other callers get 403. Only the portal owner can import a user as `DocSpaceAdmin` who is not a DocSpace admin of this portal yet. If another admin tries this, the call returns 403 and imports nothing. The call only queues the job and returns an empty body immediately. Repeat `GET api/2.0/migration/status` until `isCompleted` is true. There, `successedUsers`, `failedUsers`, and `error` show the result. The log in `GET api/2.0/migration/logs` has a line for each step. The import changes the portal and cannot be undone. Do not repeat the call. While the job runs, a repeated call does nothing. After the job ends, the portal deletes the backup. A repeated call then starts a job that fails and replaces the result and the log of the import. So read them first, and upload and parse the backup before a new import. The call returns 400 for a missing or unreadable body, an unknown `userType`, or an empty or invalid `email`. When the import ends, close it with `POST api/2.0/migration/finish`. That call can also email the imported users their activation links.  Raises the `room.created` webhook for every room the queued import creates, but no webhooks for imported users, groups, and files. Raises the `folder.created` webhook for every folder the queued import creates, including one per imported user for their files. Raises the `room.updated` webhook for every room the queued import moves to its owner, a room admin or DocSpace admin.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MigrationApiInfo** | body | [**MigrationApiInfo**](../models/migration-api-info.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The import has been queued; the response carries no content and the progress is read from `GET api/2.0/migration/status` | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body is missing or could not be read as a parse result, including an unknown `userType` name, or a user in `users`, `withoutEmailUsers` or `existUsers` has an `email` that is empty or not a valid address | - | - |
| **403** | The caller is not a DocSpace administrator, or is not the portal owner and asked to import a user as `DocSpaceAdmin` who is not an administrator of this portal yet | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
