# updateUserStatus

> EmployeeFullArrayWrapper updateUserStatus(status, UpdateMembersRequestDto)

`PUT /api/2.0/people/status/{status}`

Change a user status

Enables or disables several accounts. A disabled account keeps its data and can be enabled later. The route accepts only `Active` and `Terminated`. Any other status returns 400. Requires a DocSpace admin. Other callers get 403. The call checks the whole list before it changes anything. If the list has a system or LDAP account, the portal owner, or the caller, the call returns 403. Only the portal owner can change a DocSpace admin. The call changes data. You can repeat it with the same body. Disabling ends all sessions of the account and frees its seat. Enabling takes a seat again. If the tariff or quota has no free seat, the call returns 402. The call enables the accounts one by one, so a 402 leaves the earlier ones enabled. Enabling changes only disabled accounts. An account with no name and an unused invitation becomes `Pending`, not `Active`. So check `status` in the response. Deletion with `DELETE api/2.0/people/{userId}` requires the `Terminated` status.  Raises the `user.updated` webhook for every listed account, changed or not, and for none after a 402.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **status** | path | **EmployeeStatus** | The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account, and `Terminated`, which disables it, are accepted; any other value is rejected with 400. | [required] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) | The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the invitation operations and is ignored here. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The listed accounts with their statuses after the change | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The requested status is neither Active nor Terminated | - | - |
| **402** | The tariff or the user quota does not allow enabling one more account | - | - |
| **403** | No permissions to perform this action, or the list names a system, LDAP, owner, self or DocSpace admin account | - | - |
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
