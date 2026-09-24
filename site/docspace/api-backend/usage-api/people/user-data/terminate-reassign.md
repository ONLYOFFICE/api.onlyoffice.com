# terminateReassign

> TaskProgressResponseWrapper terminateReassign(TerminateRequestDto)

`PUT /api/2.0/people/reassign/terminate`

Terminate the data reassignment

Cancels the data reassignment queued for the user with the ID specified in the request. The caller needs the permission to edit users, and only the portal owner may cancel a reassignment whose source user is a DocSpace administrator. The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and repeating it on an already cancelled job changes nothing. Cancelling removes the job from the queue and does not undo the transfers it has already made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/reassign/start`. The returned progress reports `status` as `Canceled` and `isCompleted` as true.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](../../models/terminate-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the cancelled reassignment, or an empty body when nothing was queued for the user | [**TaskProgressResponseWrapper**](../../models/task-progress-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: application/json
- **Accept**: application/json
