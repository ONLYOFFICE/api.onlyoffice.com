# getUserTypeUpdateProgress

Referenced types are defined in the [full reference](../people.md).

> TaskProgressResponseWrapper getUserTypeUpdateProgress(userid)

`GET /api/2.0/people/type/progress/{userid}`

Get the user type change progress

Returns the current state of the user type change queued for the user with the ID specified in the request. A conversion must have been queued by `POST api/2.0/people/type` first: when nothing is queued for that user the operation answers 200 with an empty body. The caller needs the permission to add and remove users. The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job. Use `PUT api/2.0/people/type/terminate` to cancel a conversion that is still running.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued user type change, or an empty body when nothing is queued for the user | [**TaskProgressResponseWrapper**](../people.md#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TaskProgressResponseWrapper**](../people.md#model-taskprogressresponsewrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
