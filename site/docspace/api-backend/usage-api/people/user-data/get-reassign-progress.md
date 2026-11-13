# getReassignProgress

> TaskProgressResponseWrapper getReassignProgress(userId)

`GET /api/2.0/people/reassign/progress/{userId}`

Get the reassignment progress

Returns the progress of the job that moves the data of a user to another user. To start the job, use `POST api/2.0/people/reassign/start`. Requires a DocSpace admin. Other callers get 403. Only the portal owner can read the job of a source user who is a DocSpace admin. Other DocSpace admins get 403 for it. The call is read-only. This is the call to poll. Repeat it until `isCompleted` is true. If no job exists for the user, the response has no progress object. If the job fails, `error` holds the reason. To cancel a running job, use `PUT api/2.0/people/reassign/terminate`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **UUID** (uuid) | The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued reassignment, or an empty body when nothing is queued for the user | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
