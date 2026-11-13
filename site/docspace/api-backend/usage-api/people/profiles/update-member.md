# updateMember

> EmployeeFullWrapper updateMember(userId, UpdateMemberRequestDto)

`PUT /api/2.0/people/{userId}`

Update a user

Updates an account. The fields it applies depend on whose account it is. On their own account, a caller can change the names, location, comment, `spam`, contacts, groups, and avatar. The call then ignores `disable` and `isUser`. On another account, the call applies only `disable` and `isUser` and ignores all other fields. Any signed-in user can call it for their own account. For another account, it requires a DocSpace admin, and other callers get 403. Only the portal owner can edit another DocSpace admin, and nobody else can edit the portal owner. The call changes groups only if the caller can edit groups. For an LDAP or SSO account, it keeps the names and location. If the names are not valid, the call returns 400. With `disable` set to true, the account gets the `Terminated` status, and its sessions end. Deletion with `DELETE api/2.0/people/{userId}` requires this status. With `isUser` set to true, the account becomes a guest, and false makes it a user again. If the tariff or quota has no free seat for this, the call returns 402. The call ignores a request to make the portal owner, a DocSpace admin, or a module admin a guest. If the portal refuses the `files` URL or its server returns an error, the call returns 403. If no account has the ID, the call returns 404. The call changes data. You can repeat it with the same body. It returns the profile after the update. To change the language, use `PUT api/2.0/people/{userId}/culture`. To change the type, use `PUT api/2.0/people/type/{type}`.  Raises the `user.updated` webhook on every call for the caller's own account, even one that changes nothing. Raises the `user.updated` webhook for another account when `disable` is sent or `isUser` changes the type.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateMemberRequestDto** | body | [**UpdateMemberRequestDto**](../../models/update-member-request-dto.md) | The request parameters for updating the user information. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile as it is after the update | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The first and last name pair is not a valid user name | - | - |
| **402** | The tariff or the user quota does not allow the requested guest or member seat | - | - |
| **403** | The account is the portal owner or a system account, the caller may not edit it, only the portal owner may edit a DocSpace administrator, or, on the caller's own profile, the `files` URL was refused or the server behind it answered with an error status | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../../models/employee-full-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
