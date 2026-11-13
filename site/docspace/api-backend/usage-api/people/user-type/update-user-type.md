# updateUserType

> EmployeeFullArrayWrapper updateUserType(type, UpdateMembersRequestDto)

`PUT /api/2.0/people/type/{type}`

Change a user type

Changes the type of the listed accounts to the type in the route. Only these changes work: a guest to `User`, a user or guest to `RoomAdmin`, and any account to `DocSpaceAdmin`. The portal owner can also make a DocSpace admin a `RoomAdmin`. Any other change returns 403, including any change to `Guest`. A room admin can make a guest a `User`. Only a DocSpace admin can set `RoomAdmin`, and only the portal owner can set `DocSpaceAdmin`. Other callers get 403. Nobody can change their own type or the type of the portal owner. The caller must see each account, and no account can be disabled. Otherwise the call returns 403. The call changes data, and a repeated call returns 403. It emails each changed account. An account that got an email about the same type recently gets no new one. The call changes the accounts one by one, so an error in the middle leaves the earlier ones changed. A paid type takes a paid seat. If the tariff has no free paid seat, the call returns 402. If `userIds` is missing, the call returns 400. The call does not move rooms or shared files. To move them in the same step, use `POST api/2.0/people/type`.  Raises the `user.updated` webhook for every changed account, one by one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | path | **EmployeeType** | The type to convert the listed accounts to, taken from the route: `User`, `Guest`, `RoomAdmin` or `DocSpaceAdmin`. `RoomAdmin` and `DocSpaceAdmin` take a paid seat. | [required] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) | The accounts to convert. Only `userIds` is read by this operation; `resendAll` belongs to the invitation operations and is ignored here. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The converted users with their detailed information | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `userIds` | - | - |
| **402** | The tariff or the paid-user quota does not allow one more paid user | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
