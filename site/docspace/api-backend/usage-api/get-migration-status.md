# getMigrationStatus

Referenced types are defined in the [full reference](../api.md).

> MigrationStatusWrapper getMigrationStatus()

`GET /api/2.0/migration/status`

Get migration status

Returns how far the parse or the import queued for this portal has got and, once it stopped, what it produced - the one place where every other operation in this group reports what it did. Any of them may be polled from here as soon as it returns; a DocSpace administrator is required and the call is read-only and idempotent. `progress` is the share of the job that is done, from 0 to 100, and `isCompleted` turns true when the job stopped whether it succeeded or not, so read `error` as well: it stays empty while nothing went wrong and otherwise holds the message that ended the job. `parseResult` carries what the migrator has read so far - after a parse pass the users, groups and unreadable archives to edit and post to `POST api/2.0/migration/migrate`, and during an import also `successedUsers` and `failedUsers` - and its `operation` field, `parse` or `migration`, tells the two stages apart. The result is empty with status 200 when the portal has no job at all, because none was ever started or because `POST api/2.0/migration/clear` or `POST api/2.0/migration/finish` has removed the last one; an empty answer is therefore not an error. Line-by-line detail behind the numbers is in `GET api/2.0/migration/logs`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the parse or import queued for the portal, or an empty result when the portal has no job | [**MigrationStatusWrapper**](../api.md#model-migrationstatuswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**MigrationStatusWrapper**](../api.md#model-migrationstatuswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
