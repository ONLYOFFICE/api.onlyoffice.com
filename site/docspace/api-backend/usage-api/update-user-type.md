# updateUserType

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullArrayWrapper updateUserType(type, UpdateMembersRequestDto)

`PUT /api/2.0/people/type/{type}`

Change a user type

Changes the type of the existing portal users listed in `userIds` to the type given in the route, in one call. The caller needs the permission to add and remove users of the requested type, cannot change their own type or the type of the portal owner, and cannot use this operation at all while being a guest; changing somebody to `Guest` additionally requires the portal to allow inviting guests. Every listed account has to be visible to the caller and must not be disabled. The change is applied immediately: each converted user gets a notification email and raises a `UserUpdated` webhook, and the accounts are processed one by one, so a rejection in the middle leaves the users before it already converted - re-read them before retrying. The answer streams the converted users with their detailed information, in the order they were processed. Converting somebody to a paid type takes a paid seat, so the operation answers 402 when the tariff or the paid-user quota does not allow one more. This operation only moves the type and leaves the rooms and the shared files of the account where they are - to hand them over to another admin in the same step, use `POST api/2.0/people/type` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | path | **EmployeeType** | The type to convert the listed accounts to, taken from the route: `User`, `Guest`, `RoomAdmin` or `DocSpaceAdmin`. `RoomAdmin` and `DocSpaceAdmin` take a paid seat. | [required] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../people.md#model-updatemembersrequestdto) | The accounts to convert. Only `userIds` is read by this operation; `resendAll` belongs to the invitation operations and is ignored here. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The converted users with their detailed information | [**EmployeeFullArrayWrapper**](../people.md#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The tariff or the paid-user quota does not allow one more paid user | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../people.md#model-employeefullarraywrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PortalGuestsApi
