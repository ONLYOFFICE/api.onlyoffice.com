# startReassign

Referenced types are defined in the [full reference](../people.md).

> TaskProgressResponseWrapper startReassign(StartReassignRequestDto)

`POST /api/2.0/people/reassign/start`

Start the data reassignment

Queues an asynchronous job that transfers the rooms and the shared files owned by one portal user to another. The source user must already have the `Terminated` status - disable the account through `PUT api/2.0/people/status/{status}` before calling this - and the destination user must be an active room admin or DocSpace admin, so a guest, a system account or a disabled account is rejected. The caller needs the permission to edit users, cannot reassign their own data, and must be the portal owner to reassign the data of another DocSpace administrator or of a People module administrator. The transfer does not finish within this call: poll `GET api/2.0/people/reassign/progress/{userid}` with the source user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/reassign/terminate`. Pass `deleteProfile` as true to delete the source profile once the transfer succeeds, otherwise the emptied profile is kept. Use `GET api/2.0/people/reassign/necessary` first to find out whether the user owns anything that has to be reassigned at all.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartReassignRequestDto** | body | [**StartReassignRequestDto**](../people.md#model-startreassignrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued reassignment | [**TaskProgressResponseWrapper**](../people.md#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The destination user is not an active room or DocSpace admin, or the source user is a system account, the portal owner, the caller, or is not disabled | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TaskProgressResponseWrapper**](../people.md#model-taskprogressresponsewrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
