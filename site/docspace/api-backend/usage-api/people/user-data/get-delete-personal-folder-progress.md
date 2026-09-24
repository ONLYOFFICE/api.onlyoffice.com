# getDeletePersonalFolderProgress

> TaskProgressResponseWrapper getDeletePersonalFolderProgress()

`GET /api/2.0/people/delete/personal/progress`

Get the personal folder deletion progress

Returns the current state of the personal folder deletion queued for the authenticated account. The job must have been queued by `POST api/2.0/people/delete/personal/start` first: when nothing is queued for the caller the operation answers 200 with an empty body. It takes no parameters and reports on the caller only, so an administrator cannot watch the folder deletion of another user through it. The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, and read `error` for the message left by a failed job. A queued personal folder deletion cannot be cancelled, so the only outcome to wait for is its completion.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued personal folder deletion, or an empty body when nothing is queued for the caller | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
