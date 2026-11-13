# getExternalDbSyncStatus

> ExternalDbSyncTaskWrapper getExternalDbSyncStatus(id)

`GET /api/2.0/files/rooms/{id}/externaldbsync`

Get external DB sync status

Returns the record of the job that exports form data of a form filling room to the external database. Requires editing access to a form filling room. Other callers get 403. Any other room also returns 403. The call is read-only. This is the call to poll after `POST api/2.0/files/rooms/{id}/externaldbsync`. Repeat it until `isCompleted` is true. Then read the result of each form in `forms`. The body is empty if the room has no job. The record belongs to the room, so every member with editing access sees the same job. If the room does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The synchronization job record, or an empty body when the room has no job | [**ExternalDbSyncTaskWrapper**](../models/external-db-sync-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The room is not a form filling room, or the caller cannot edit it | - | - |
| **404** | No folder with this ID exists | - | - |
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
