# createInvitationLink

> InvitationLinkWrapper createInvitationLink(InvitationLinkCreateRequestDto)

`POST /api/2.0/portal/users/invitationlink`

Create an invitation link

Creates the portal's invitation link for one role and returns it together with the URL to share. A portal keeps at most one link per role, so a call for a role that already has one is refused - read the existing link with `GET api/2.0/portal/users/invitationlink/{employeeType}` and change it with `PUT api/2.0/portal/users/invitationlink` instead. Inviting members has to be enabled for the portal (`GET api/2.0/settings/invitationsettings`), `employeeType` has to be `DocSpaceAdmin`, `RoomAdmin` or `User`, and `expiration`, when given, has to lie in the future and is read in the portal time zone. The caller needs the right to add users of that role, only the portal owner may create the DocSpace administrator link, and a link for a paying role additionally needs a free paid seat in the portal quota. The call is mutating and not idempotent. The answer carries the `id` needed to update or delete the link, the shortened `url`, `maxUseCount` and `currentUseCount`, `expiration` in the portal time zone - empty for a link that never expires - and `isExpired`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InvitationLinkCreateRequestDto** | body | [**InvitationLinkCreateRequestDto**](../../models/invitation-link-create-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The invitation link as it was created, with the `id` to address it later and the `url` to share | [**InvitationLinkWrapper**](../../models/invitation-link-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
