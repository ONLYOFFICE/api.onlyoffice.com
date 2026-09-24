# deleteInvitationLink

> StringWrapper deleteInvitationLink(InvitationLinkDeleteRequestDto)

`DELETE /api/2.0/portal/users/invitationlink`

Delete an invitation link

Deletes the portal's invitation link with the given `id`, so the URL shared from it stops letting anyone in; accounts that already joined through it are not touched. Inviting members has to be enabled for the portal (`GET api/2.0/settings/invitationsettings`) and the link has to exist - a second call with the same `id` is answered as not found. The caller needs the right to add users of the link's role, and only the portal owner may delete the DocSpace administrator link. The call is destructive and cannot be undone: a link for the same role has to be created again with `POST api/2.0/portal/users/invitationlink`, and it gets a new `id`, a new URL and a `currentUseCount` that starts from zero. Nothing is returned in the body. To stop invitations without losing the links, switch inviting members off for the whole portal with `PUT api/2.0/settings/invitationsettings` - the links then stay stored but are refused until it is switched on again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InvitationLinkDeleteRequestDto** | body | [**InvitationLinkDeleteRequestDto**](../../models/invitation-link-delete-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link is deleted and its URL no longer lets anyone join the portal | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
