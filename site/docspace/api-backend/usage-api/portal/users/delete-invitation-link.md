# deleteInvitationLink

> StringWrapper deleteInvitationLink(InvitationLinkDeleteRequestDto)

`DELETE /api/2.0/portal/users/invitationlink`

Delete an invitation link

Deletes an invitation link of the portal by its `id`. Its URL then stops letting anyone join, and the accounts that joined through it stay. If inviting members is turned off in `GET api/2.0/settings/invitationsettings`, the call returns 403. The portal owner can delete every link. A DocSpace admin can delete the `RoomAdmin` and `User` links, and a room admin only the `User` link. Other callers get 403. The call cannot be undone. A repeated call or an unknown `id` returns 404. A body without `id` returns 400. A new link for the role gets a new `id` and URL, and its use count starts from zero. To create it, use `POST api/2.0/portal/users/invitationlink`. To stop invitations and keep the links, turn inviting off with `PUT api/2.0/settings/invitationsettings`. The links then stop working until you turn it on again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InvitationLinkDeleteRequestDto** | body | [**InvitationLinkDeleteRequestDto**](../../models/invitation-link-delete-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link is deleted and its URL no longer lets anyone join the portal | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id` | - | - |
| **403** | Inviting members is disabled for the portal, the caller has no right to add users of the link's role, or a non-owner tries to delete the DocSpace administrator link | - | - |
| **404** | No invitation link with this ID exists on the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
