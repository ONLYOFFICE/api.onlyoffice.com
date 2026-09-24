# necessaryReassign

> BooleanWrapper necessaryReassign(UserId, Type)

`GET /api/2.0/people/reassign/necessary`

Check data for reassignment need

Reports whether the rooms and the shared files of a user have to be reassigned before that user can be removed or changed to the type passed in `type`. Call it before `DELETE api/2.0/people/{userid}` or before a type change to find out whether `POST api/2.0/people/reassign/start` has to run first. The caller needs the permission to add and remove users of the requested type, and must be the portal owner when the checked user is a DocSpace administrator. The call is read-only and answers true when the user owns at least one room, or - when `type` is `Guest` - when the user still has shared files. A false answer means the user can be removed or converted without a reassignment.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UserId** | query | **UUID** (uuid) | The ID of the user whose rooms and shared files are checked. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **Type** | query | **EmployeeType** | The type the user is about to be changed to, which decides what counts as data that has to be reassigned: `RoomAdmin`, `DocSpaceAdmin` and `User` are checked for owned rooms only, while `Guest` is also checked for files that are still shared. The default is `All`, which checks owned rooms only. | [optional] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |

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
