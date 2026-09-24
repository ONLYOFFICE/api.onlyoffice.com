# updateInvitationLink

> InvitationLinkWrapper updateInvitationLink(InvitationLinkUpdateRequestDto)

`PUT /api/2.0/portal/users/invitationlink`

Update an invitation link

Changes the deadline and the use limit of an existing invitation link, addressed by its `id`. The role of a link cannot be changed - delete it and create a link for the other role instead. Inviting members has to be enabled for the portal (`GET api/2.0/settings/invitationsettings`), the link has to exist, and `maxUseCount` may not be lower than the number of uses the link already has, which `GET api/2.0/portal/users/invitationlink/{employeeType}` reports as `currentUseCount`. An `expiration` in the past is refused; the body is applied as a whole, so omitting `expiration` clears the deadline and omitting `maxUseCount` removes the use limit. The caller needs the right to add users of the link's role and only the portal owner may change the DocSpace administrator link. The call is mutating, and repeating it with the same body leaves the link as it is. The whole link comes back as it now stands, with `url` signed for the calling account - the URL therefore differs between administrators while the link behind it is the same.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InvitationLinkUpdateRequestDto** | body | [**InvitationLinkUpdateRequestDto**](../../models/invitation-link-update-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link as it now stands, with the deadline and the use limit that were applied | [**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
