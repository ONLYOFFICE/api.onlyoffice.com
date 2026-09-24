# startDeletePersonalFolder

> TaskProgressResponseWrapper startDeletePersonalFolder()

`POST /api/2.0/people/delete/personal/start`

Delete the personal folder

Queues an asynchronous job that empties the personal folder of the authenticated account. The operation takes no parameters and always acts on the caller, so it cannot be used to empty the folder of another user. Only an account whose type is `Guest` may call it; every other type is rejected, because only a guest has a personal folder that can be emptied this way. The job does not finish within this call: poll `GET api/2.0/people/delete/personal/progress` until `isCompleted` is true. The job deletes the files permanently and cannot be undone or cancelled - there is no terminate operation for this flow, unlike the user data deletion.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued personal folder deletion | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a guest, so there is no personal folder to empty | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
