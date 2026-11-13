# inviteUsers

> EmployeeArrayWrapper inviteUsers(InviteUsersRequestDto)

`POST /api/2.0/people/invite`

Invite users

Invites people to the portal by email. For each new address, the call creates a pending account and emails it an invitation link. Requires a room admin or a DocSpace admin. Other callers get 403. Only a DocSpace admin can invite a room admin, and only the portal owner can invite a DocSpace admin. The `Guest` type and a portal that does not allow inviting members also return 403. For an address that already has an account, the call sends no email. It links that account to the caller and raises its type if needed. The call changes data. A repeated call sends no new emails, since the accounts then exist. Its seat check still counts each room admin and DocSpace admin in the body. So a repeat can return 402. If the pending account was deleted, a new invitation to its address soon after the first sends no email. The first link still works. If the invitations need more paid seats than the tariff has left, the call returns 402 and sends nothing. The call returns 400 for a malformed or punycode address, or for the address of a disabled account. The call handles the addresses in order. So a 400 or 403 in the middle leaves the earlier invitations sent. The call returns every pending account that the caller can see, not only the new ones. The portal limits the rate of these calls. To send an invitation again, use `PUT api/2.0/people/invite`.  Raises the `user.invited` webhook for every address without an account, not for an existing account whose type it raises.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InviteUsersRequestDto** | body | [**InviteUsersRequestDto**](../../models/invite-users-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every pending profile the caller may see, not only the ones just invited | [**EmployeeArrayWrapper**](../../models/employee-array-wrapper.md) | - |
| **400** | An address is malformed or written in punycode, or it belongs to a disabled account | - | - |
| **402** | The invitations would need more paid seats than the tariff has left | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeArrayWrapper**](../../models/employee-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
