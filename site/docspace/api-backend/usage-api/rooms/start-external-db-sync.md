# startExternalDbSync

> ExternalDbSyncTaskWrapper startExternalDbSync(id)

`POST /api/2.0/files/rooms/{id}/externaldbsync`

Start external DB sync

Queues a background job that re-exports the collected data of every original form of a form filling room into the external database configured for the portal, and returns the job record. The room must be a form filling room and the caller must be able to edit it, otherwise the call is refused with 403; an unknown room is answered with 404. The export is not done when the response arrives: poll `GET api/2.0/files/rooms/{id}/externaldbsync` until `isCompleted` is true, then read `forms` for the per-form outcome, which stays empty while the job is running. Starting the job again while it is still running returns the same record instead of a second job, so a retry is safe; a finished job is replaced by the new one. One job is kept per room. A form whose data cannot be exported does not stop the others: it comes back in `forms` with `success` false and its own `error`. When the portal has no external database configured the call fails and nothing is queued.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The synchronization job record to poll | [**ExternalDbSyncTaskWrapper**](../models/external-db-sync-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has no external database configured | - | - |
| **403** | The room is not a form filling room, or the caller cannot edit it | - | - |
| **404** | No room with this ID is visible to the caller | - | - |
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
