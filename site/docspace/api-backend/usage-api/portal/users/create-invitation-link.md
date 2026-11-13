# createInvitationLink

> InvitationLinkWrapper createInvitationLink(InvitationLinkCreateRequestDto)

`POST /api/2.0/portal/users/invitationlink`

Create an invitation link

Creates the invitation link of the portal for one role and returns it with the URL to share. If inviting members is turned off in `GET api/2.0/settings/invitationsettings`, the call returns 403. The portal owner can create a link for any role. A DocSpace admin can create the `RoomAdmin` and `User` links, and a room admin only the `User` link. Other callers get 403. The call changes data. A role has at most one link, so a repeated call returns 400. To change an existing link, use `PUT api/2.0/portal/users/invitationlink`. Without `expiration`, the link never expires. Without `maxUseCount`, it has no use limit. The answer has the `id` that the update and delete calls need. The call returns 400 for another role, an `expiration` in the past, or a `maxUseCount` out of range. For a `RoomAdmin` or `DocSpaceAdmin` link, it returns 402 if the payment is overdue or no paid seat is free.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InvitationLinkCreateRequestDto** | body | [**InvitationLinkCreateRequestDto**](../../models/invitation-link-create-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link as it was created, with the `id` to address it later and the `url` to share | [**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, the role is not `DocSpaceAdmin`, `RoomAdmin` or `User`, the use limit is outside 1-1000, the deadline is in the past, or the role already has a link | - | - |
| **402** | The link is for a paying role, and the portal payment is overdue or the portal quota has no free paid seat left | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
