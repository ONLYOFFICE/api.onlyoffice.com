# startUserTypeUpdate

> TaskProgressResponseWrapper startUserTypeUpdate(StartUpdateUserTypeDto)

`POST /api/2.0/people/type`

Start updating user type

Starts a job that changes an account to `Guest` or `User`. The same job moves the rooms and shared files of the account to another admin. For other types, use `PUT api/2.0/people/type/{type}`. Any other type returns 400. Requires a room admin or a DocSpace admin. Other callers get 403. The `Guest` type also returns 403 if the portal does not allow inviting guests. Only the portal owner can change a DocSpace admin. Otherwise the call returns 400. The call also returns 400 for a system or disabled account, or for the account of the caller. The recipient is `reassignUserId`, or the caller if it is empty. It must be an active room admin or DocSpace admin, other than the account. Otherwise the call returns 400. The call queues work. While the job runs, a repeated call returns its state and starts nothing. After the job ends, a repeat starts a new job, which emails the caller again. Poll `GET api/2.0/people/type/progress/{userId}` until `isCompleted` is true. To cancel the job, use `PUT api/2.0/people/type/terminate`. A failure inside the job shows in `error` of the progress, not as a status code.  Raises the `user.updated` webhook once the queued type change succeeds, not when it is cancelled or fails. Raises the `room.updated` webhook for every room of the account, once the job moves it to the recipient. Raises the `agent.updated` webhook instead for an AI agent the account owns.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartUpdateUserTypeDto** | body | [**StartUpdateUserTypeDto**](../../models/start-update-user-type-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued user type change | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The requested type is neither Guest nor User, the account is a system account, disabled or the caller, the recipient is the same account or is not an active admin, or a non-owner tried to convert a DocSpace admin | - | - |
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
