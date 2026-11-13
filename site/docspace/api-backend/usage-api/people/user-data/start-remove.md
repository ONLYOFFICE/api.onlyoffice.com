# startRemove

> TaskProgressResponseWrapper startRemove(TerminateRequestDto)

`POST /api/2.0/people/remove/start`

Start the data deletion

Starts a job that deletes the data and the profile of a disabled user. The job deletes the personal files of the account. It moves the rooms and third-party storage accounts to the caller. Files and folders that the account shared from the personal section move to a new folder of the caller. First, disable the account through `PUT api/2.0/people/status/{status}`. Requires a DocSpace admin. Other callers get 403. Only the portal owner can delete the data of another DocSpace admin. Other DocSpace admins get 403 for it. The call queues work, and the deletion cannot be undone. Repeat `GET api/2.0/people/remove/progress/{userId}` with the same user ID until `isCompleted` is true. While a job for the account runs, a repeated call returns that job and starts nothing new. After the job succeeds, a repeated call returns 400. After a failed job, a repeated call starts a new one. The portal emails the caller when the job succeeds or fails. To cancel a running job, use `PUT api/2.0/people/remove/terminate`. To move the data to a user you choose, use `POST api/2.0/people/reassign/start` instead. The call returns 400 if the user is unknown, the portal owner, the caller, or not disabled.  Raises the `folder.created` webhook when the job moves shared files to a new folder of the caller, but no `user.deleted`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](../../models/terminate-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued deletion | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `userId`, no user has the specified ID, or the account is the portal owner, the caller, or is not disabled | - | - |
| **403** | No permissions to perform this action | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
