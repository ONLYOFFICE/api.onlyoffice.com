# startExternalDbSync

> ExternalDbSyncTaskWrapper startExternalDbSync(id)

`POST /api/2.0/files/rooms/{id}/externaldbsync`

Start external DB sync

Starts a job that exports the data of all original forms of a form filling room to the external database. Requires editing access to a form filling room. Other callers get 403. Any other room also returns 403. The call queues work and returns the job record. Repeat `GET api/2.0/files/rooms/{id}/externaldbsync` until `isCompleted` is true. Then read `forms` for the result of each form. A form that fails does not stop the others. It gets `success` false and its own `error`. While a job runs, a new call returns that job and starts no second one. So you can repeat the call. After a job ends, a new call starts a new job. The new job exports only the form data that the database does not have yet. The room keeps one job record. If no external database is configured, the call returns 400 and queues nothing. If the room does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The synchronization job record to poll | [**ExternalDbSyncTaskWrapper**](../models/external-db-sync-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The room is not a form filling room, or the caller cannot edit it | - | - |
| **404** | No folder with this ID exists | - | - |
| **400** | The portal has no external database configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalDbSyncTaskWrapper**](../models/external-db-sync-task-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
