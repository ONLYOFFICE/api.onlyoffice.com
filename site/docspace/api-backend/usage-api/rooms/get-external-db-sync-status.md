# getExternalDbSyncStatus

> ExternalDbSyncTaskWrapper getExternalDbSyncStatus(id)

`GET /api/2.0/files/rooms/{id}/externaldbsync`

Get external DB sync status

Returns the record of the external database export job of a form filling room, or an empty body when the room has no job at all. The room must be a form filling room and the caller must be able to edit it, otherwise the call is refused; an unknown room is answered with 404. This is the polling target of `POST api/2.0/files/rooms/{id}/externaldbsync`: repeat it until `isCompleted` is true, and then read `forms`, which lists one entry per original form with its own `success` and `error` and is empty while the job is still running. `percentage` advances as forms are processed, `status` distinguishes a job that is queued, running, finished or failed, and `error` carries the message of a job that stopped as a whole. The record belongs to the room rather than to the account that started the job, so any member who can edit the room sees the same answer. The call changes nothing and is safe to repeat.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The synchronization job record, or an empty body when the room has no job | [**ExternalDbSyncTaskWrapper**](../models/external-db-sync-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **404** | No room with this ID is visible to the caller | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalDbSyncTaskWrapper**](../models/external-db-sync-task-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
