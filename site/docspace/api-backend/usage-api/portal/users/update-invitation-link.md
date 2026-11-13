# updateInvitationLink

> InvitationLinkWrapper updateInvitationLink(InvitationLinkUpdateRequestDto)

`PUT /api/2.0/portal/users/invitationlink`

Update an invitation link

Changes the deadline and the use limit of an invitation link by its `id`. The call applies the whole body. So a missing `expiration` removes the deadline, and a missing `maxUseCount` removes the use limit. You cannot change the role of a link. To do this, delete the link and create a new one. If inviting members is turned off in `GET api/2.0/settings/invitationsettings`, the call returns 403. The portal owner can change every link. A DocSpace admin can change the `RoomAdmin` and `User` links, and a room admin only the `User` link. Other callers get 403. The call changes data, and you can repeat it with the same body. It keeps the use count of the link. After `expiration` passes, a repeated call returns 400. The call returns the whole link as it now stands. If no link has this `id`, the call returns 404. The call returns 400 for an `expiration` in the past or a `maxUseCount` out of range. It also returns 400 if `maxUseCount` is lower than the `currentUseCount` of the link.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InvitationLinkUpdateRequestDto** | body | [**InvitationLinkUpdateRequestDto**](../../models/invitation-link-update-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link as it now stands, with the deadline and the use limit that were applied | [**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id`, the use limit is outside 1-1000 or lower than the number of uses the link already has, or the deadline is in the past | - | - |
| **403** | Inviting members is disabled for the portal, the caller has no right to add users of the link's role, or a non-owner tries to change the DocSpace administrator link | - | - |
| **404** | No invitation link with this ID exists on the portal | - | - |
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
