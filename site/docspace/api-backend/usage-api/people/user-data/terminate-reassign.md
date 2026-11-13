# terminateReassign

> TaskProgressResponseWrapper terminateReassign(TerminateRequestDto)

`PUT /api/2.0/people/reassign/terminate`

Terminate the data reassignment

Cancels the job that moves the data of a user to another user. Requires a DocSpace admin. Other callers get 403. Only the portal owner can cancel the job of a source user who is a DocSpace admin. Other DocSpace admins get 403 for it. The call changes data. It removes the job from the queue. It does not undo the moves that the job already made. You cannot resume the job. To start again, use `POST api/2.0/people/reassign/start`. The returned progress has `status` `Canceled` and `isCompleted` true, even for a job that already finished. If no job exists for the user, the response has no progress object. So you can repeat the call. The call returns 400 if the body has no `userId`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](../../models/terminate-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the cancelled reassignment, or an empty body when nothing was queued for the user | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `userId` | - | - |
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
