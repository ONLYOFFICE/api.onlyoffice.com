# sendJoinInviteMail

> StringWrapper sendJoinInviteMail(AdminMessageBaseSettingsRequestsDto)

`POST /api/2.0/settings/sendjoininvite`

Send an invitation email

Sends an invitation email with a join link to the address in the request - the self-registration the sign-in page's register link performs. No token is needed. The portal has to publish a trusted-domain policy first, saved with `POST api/2.0/settings/maildomainsettings`: without one there is nothing to join and every caller alike is answered with 405 - the same condition `GET api/2.0/settings` reports as `enabledJoin`. `email` has to be a real address written in ASCII rather than an internationalized one, must not already belong to a portal member, and, when the policy names domains rather than accepting all of them, has to end with one of them - each of those faults is refused with 400. `culture` picks the language of the letter. The invitation is not an account: the invitee becomes a member only after following the link, and the role it grants, user or room administrator, follows the trusted-domain settings and drops to user once the portal's paid places are taken. Where the installation caps invitations, an accepted call spends one of those counted by `invitationLimit`, and only about a dozen calls from one address in two minutes are accepted. What comes back is a localized confirmation.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AdminMessageBaseSettingsRequestsDto** | body | [**AdminMessageBaseSettingsRequestsDto**](../../models/admin-message-base-settings-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the invitation with the join link has been sent | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The email address is malformed or internationalized, lies outside the trusted domains, or already belongs to a member of the portal | - | - |
| **403** | The portal is not accepting requests while it is being restored, transferred or encrypted | - | - |
| **405** | The portal publishes no trusted-domain policy, so it has nothing to join | - | - |
| **429** | Too many invitation requests came from the same network address | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[cookieAuth](../settings.md#cookieauth), [bearerAuth](../settings.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
