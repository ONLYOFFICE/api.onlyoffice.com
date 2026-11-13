# saveMailDomainSettings

> StringWrapper saveMailDomainSettings(MailDomainSettingsRequestDto)

`POST /api/2.0/settings/maildomainsettings`

Save the mail domain settings

Changes the trusted mail domains of the portal. People with an email address in these domains can join the portal without an invitation. The `type` value picks the mode: no trusted domains, the domains of `domains`, or any domain. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. You can repeat it with the same body. For the `Custom` mode, the call trims and lowercases each domain. For other modes, it ignores `domains`. It returns a confirmation text, not the saved settings. To read them, use `GET api/2.0/settings`. The call returns 400 for a missing field, an empty `Custom` list, or an empty or malformed domain. In that case, it saves nothing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MailDomainSettingsRequestDto** | body | [**MailDomainSettingsRequestDto**](../../models/mail-domain-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirmation message that the trusted mail domain settings were saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `type`, `domains` or `inviteUsersAsVisitors`, or the trust type is `Custom` and the domain list is empty or holds an empty or malformed domain | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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
