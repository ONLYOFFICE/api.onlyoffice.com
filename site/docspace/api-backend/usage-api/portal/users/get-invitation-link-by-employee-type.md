# getInvitationLinkByEmployeeType

> InvitationLinkWrapper getInvitationLinkByEmployeeType(employeeType)

`GET /api/2.0/portal/users/invitationlink/{employeeType}`

Get an invitation link by role

Returns the invitation link of the portal for one role, with its URL, deadline, and use count. If inviting members is turned off in `GET api/2.0/settings/invitationsettings`, the call returns 403. The portal owner can read every link. A DocSpace admin can read the `RoomAdmin` and `User` links, and a room admin only the `User` link. Other callers get 403. The call is read-only. If the role has no link yet, the call returns 200 with no link. To create one, use `POST api/2.0/portal/users/invitationlink`. The call returns 400 for a role other than `DocSpaceAdmin`, `RoomAdmin`, or `User`. For a `RoomAdmin` or `DocSpaceAdmin` link, it returns 402 if the payment is overdue or no paid seat is free. It returns 402 even when the role has no link.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **employeeType** | path | **EmployeeType** | The role whoever follows the link joins with. Only `DocSpaceAdmin`, `RoomAdmin` and `User` have a link; any other role is refused. The portal keeps at most one link per role, so this value alone identifies it. | [required] [example: `1`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link of that role, or an empty body when the portal has no link for it | [**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The role is not `DocSpaceAdmin`, `RoomAdmin` or `User` | - | - |
| **402** | The role is a paying one, and the portal payment is overdue or the portal quota has no free paid seat left, whether or not the role has a link | - | - |
| **403** | Inviting members is disabled for the portal, the caller has no right to add users of that role, or a non-owner asks for the DocSpace administrator link | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
