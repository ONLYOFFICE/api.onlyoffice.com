# getInvitationLinkByEmployeeType

> InvitationLinkWrapper getInvitationLinkByEmployeeType(employeeType)

`GET /api/2.0/portal/users/invitationlink/{employeeType}`

Get an invitation link by role

Returns the portal's invitation link for one role - the URL to share, how long it lasts and how often it has already been used. Inviting members has to be enabled for the portal (`GET api/2.0/settings/invitationsettings`) and `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or `User`; the caller needs the right to add users of that role, only the portal owner may read the DocSpace administrator link, and for a paying role (`DocSpaceAdmin` or `RoomAdmin`) the call is refused while the portal payment is overdue or the portal quota has no free paid seat left. The call is read-only and idempotent, but the `url` it returns is signed for the calling account, so two administrators are handed two different URLs for one and the same link. A role that has no link yet is answered with an empty body and 200 rather than a 404 - create the link with `POST api/2.0/portal/users/invitationlink`. `expiration` is in the portal time zone and empty for a link without a deadline, `isExpired` says whether that deadline has passed, and `currentUseCount` counts how many accounts have already joined through the link.

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
