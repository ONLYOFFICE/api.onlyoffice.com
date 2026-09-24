# updateUserStatus

> EmployeeFullArrayWrapper updateUserStatus(status, UpdateMembersRequestDto)

`PUT /api/2.0/people/status/{status}`

Change a user status

Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting them and to bring them back later. Only `Active` and `Terminated` are accepted in the route; any other status answers 400. The caller needs the permission to edit users, and the whole list is checked before anything is applied: a system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing. Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one by one, so a quota failure partway through leaves the earlier ones enabled. Enabling only affects accounts that were disabled, and an account that had never filled in its name comes back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the answer instead of assuming it matches the request. Each changed account raises a `UserUpdated` webhook, and disabling is what `DELETE api/2.0/people/{userid}` requires before it will delete an account.

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
