# startRemove

> TaskProgressResponseWrapper startRemove(TerminateRequestDto)

`POST /api/2.0/people/remove/start`

Start the data deletion

Queues an asynchronous job that erases the data of the user with the ID specified in the request. The account must already have the `Terminated` status - disable it through `PUT api/2.0/people/status/{status}` first - and it cannot be the portal owner or the caller. The caller needs the permission to edit users, has to be a DocSpace admin to erase the data of a room admin, and has to be the portal owner to erase the data of another DocSpace admin. The erasure does not finish within this call: poll `GET api/2.0/people/remove/progress/{userid}` with the same user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/remove/terminate`. This operation destroys the data and cannot be undone; to keep the rooms and the shared files of the account instead, transfer them first through `POST api/2.0/people/reassign/start`. An unknown ID and a rejected precondition both answer 400 and name the ID they rejected.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](../../models/terminate-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued deletion | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | No user has the specified ID, or the account is the portal owner, the caller, or is not disabled | - | - |
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
