# sendJoinInviteMail

> StringWrapper sendJoinInviteMail(AdminMessageBaseSettingsRequestDto)

`POST /api/2.0/settings/sendjoininvite`

Send an invitation email

Sends an email with a join link to the address in the request. This is the self-registration behind the register link of the sign-in page. First, the portal needs a trusted-domain policy, which `POST api/2.0/settings/maildomainsettings` saves. Without one, the call returns 405 to every caller. The `enabledJoin` field of `GET api/2.0/settings` shows whether the portal has such a policy. Anyone can call it without signing in. The call returns 400 if `email` is not a valid ASCII address or already belongs to a member. It also returns 400 if the address is outside the trusted domains of the policy. The invitee becomes a member only after following the link. The trusted-domain settings make the new member a user or a room admin. When the portal's paid places are taken, the new member is always a user. If the installation limits invitations, each sent email spends one of `invitationLimit`. A success returns a localized confirmation message. Do not repeat the call. Each call sends another email.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AdminMessageBaseSettingsRequestDto** | body | [**AdminMessageBaseSettingsRequestDto**](../../models/admin-message-base-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the invitation with the join link has been sent | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `email`, the email address is malformed, internationalized or longer than 255 characters, lies outside the trusted domains, or already belongs to a member of the portal | - | - |
| **405** | The portal publishes no trusted-domain policy, so it has nothing to join | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
