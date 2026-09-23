# startUserTypeUpdate

Referenced types are defined in the [full reference](../people.md).

> TaskProgressResponseWrapper startUserTypeUpdate(StartUpdateUserTypeDto)

`POST /api/2.0/people/type`

Start updating user type

Queues an asynchronous job that converts one account to `Guest` or `User` and, in the same job, hands the rooms and the shared files of that account over to another administrator. Only `Guest` and `User` are accepted here, because they are the types that cannot own rooms; for any other type use `PUT api/2.0/people/type/{type}`, which converts immediately and transfers nothing. The caller needs the permission to add and remove users of the requested type, has to be the portal owner to convert a DocSpace administrator, and converting to `Guest` also requires the portal to allow inviting guests. The account being converted has to be active and cannot be the caller, and the recipient - `reassignUserId`, or the caller when it is omitted - has to be an active room admin or DocSpace admin other than that account. The conversion does not finish within this call: poll `GET api/2.0/people/type/progress/{userid}` with the converted user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/type/terminate`. A failure inside the running job is reported in the `error` field of the progress, not as a status code here.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartUpdateUserTypeDto** | body | [**StartUpdateUserTypeDto**](../people.md#model-startupdateusertypedto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued user type change | [**TaskProgressResponseWrapper**](../people.md#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The requested type is neither Guest nor User, the account is a system account, disabled or the caller, the recipient is the same account or is not an active admin, or a non-owner tried to convert a DocSpace admin | - | - |
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
