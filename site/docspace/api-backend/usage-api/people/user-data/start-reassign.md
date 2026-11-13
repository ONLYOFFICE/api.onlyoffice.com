# startReassign

> TaskProgressResponseWrapper startReassign(StartReassignRequestDto)

`POST /api/2.0/people/reassign/start`

Start the data reassignment

Starts a job that moves the data of a disabled user to another user. The job moves the rooms, third-party storage accounts, and files of the source. Files and folders that the source shared from the personal section move to a new folder of the recipient. First, disable the source account through `PUT api/2.0/people/status/{status}`. To check whether any data needs to move, use `GET api/2.0/people/reassign/necessary`. Requires a DocSpace admin. Other callers get 403. Only the portal owner can move the data of a DocSpace admin or an admin of the People section. Other callers get 400 for such a source. The call queues work. Repeat `GET api/2.0/people/reassign/progress/{userId}` with the source ID until `isCompleted` is true. While a job for the source runs, a repeated call returns that job and starts nothing new. After the job ends, a repeated call starts a new job. The portal then emails the caller again. If the job deleted the source profile, a repeated call returns 400. If `deleteProfile` is true, the job also deletes the other personal files of the source, then the profile. This cannot be undone. Otherwise, the source keeps the personal files that it did not share. The portal emails the caller when the job succeeds or fails. The call returns 400 if the recipient is unknown or is not an active room admin or DocSpace admin. It also returns 400 if the source is unknown, a system account, the portal owner, the caller, or not disabled.  Raises the `user.deleted` webhook when `deleteProfile` is true and the job succeeds. Raises the `folder.created` webhook when the job creates a folder for shared files, but not `room.updated` for moved rooms.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartReassignRequestDto** | body | [**StartReassignRequestDto**](../../models/start-reassign-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued reassignment | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `fromUserId` or `toUserId`, the destination user does not exist or is not an active room or DocSpace admin, or the source user does not exist, is a system account, the portal owner, the caller, is not disabled, or is a DocSpace or People administrator while the caller is not the portal owner | - | - |
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
