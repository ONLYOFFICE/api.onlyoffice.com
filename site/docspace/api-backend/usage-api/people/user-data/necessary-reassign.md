# necessaryReassign

> BooleanWrapper necessaryReassign(userId, type)

`GET /api/2.0/people/reassign/necessary`

Check data for reassignment need

Returns whether a user's data must move to another user before you delete the user or change its type. Call it before `DELETE api/2.0/people/{userId}` or a type change. If it returns true, first move the data through `POST api/2.0/people/reassign/start`. Requires the right to add and remove users of the type in `type`. Other callers get 403. Only the portal owner can check a DocSpace admin. Other callers get 403 for one. The call is read-only. It returns true if the user owns a room. If `type` is `Guest`, it also returns true for shared files. False means that you can delete the user or change the type without moving data.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | query | **UUID** (uuid) | The ID of the user whose rooms and shared files are checked. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **type** | query | **EmployeeType** | The type the user is about to be changed to, which decides what counts as data that has to be reassigned: `RoomAdmin`, `DocSpaceAdmin` and `User` are checked for owned rooms only, while `Guest` is also checked for files that are still shared. The default is `All`, which checks owned rooms only. | [optional] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the data of the user has to be reassigned before the removal or the type change | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
