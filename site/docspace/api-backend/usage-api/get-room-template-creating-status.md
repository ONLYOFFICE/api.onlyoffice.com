# getRoomTemplateCreatingStatus

Referenced types are defined in the [full reference](../files.md).

> RoomTemplateStatusWrapper getRoomTemplateCreatingStatus()

`GET /api/2.0/files/roomtemplate/status`

Get room template creation status

Reports the state of the room template creation the caller started with `POST api/2.0/files/roomtemplate`. The record is private to the account that started the job: work started by another member is never reported, and a caller who has started none gets an empty response instead of an object. Poll until `isCompleted` turns true, then take the identifier of the finished template from `templateId`; a non-empty `error` means the job failed and no template was kept. Treat `isCompleted` as the completion signal rather than `progress`, which the background job only sets to 100 once the work is over. The record outlives the job, so a finished operation can be read again and keeps returning the same identifier until the caller starts another template creation, which replaces it. The call only reads state and needs no access to the source room or to the template, but it does require an authenticated caller.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Status | [**RoomTemplateStatusWrapper**](../files.md#model-roomtemplatestatuswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomTemplateStatusWrapper**](../files.md#model-roomtemplatestatuswrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
