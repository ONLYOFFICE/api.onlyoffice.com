# startDeletePersonalFolder

> TaskProgressResponseWrapper startDeletePersonalFolder()

`POST /api/2.0/people/delete/personal/start`

Delete the personal folder

Starts a job that deletes the personal folder of the caller. Only a guest can call it. Other callers get 403. If the guest has no personal folder, the call also returns 403. Files and folders that the caller shared from the folder move to a new folder of another member. That member last changed the personal folder. If that member is a guest, the portal owner gets the new folder. The call queues work, and the deletion cannot be undone. You cannot cancel the job. Repeat `GET api/2.0/people/delete/personal/progress` until `isCompleted` is true. While the job runs, a repeated call returns that job. After the job succeeds, a repeated call returns 403. If the job fails and the folder remains, a repeated call starts a new job.  Raises the `folder.created` webhook when the job moves shared files of the caller to a new folder of another member.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued personal folder deletion | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a guest, or is a guest whose personal folder has not been created | - | - |
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
