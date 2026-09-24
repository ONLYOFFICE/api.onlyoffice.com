# saveMailDomainSettings

> StringWrapper saveMailDomainSettings(MailDomainSettingsRequestsDto)

`POST /api/2.0/settings/maildomainsettings`

Save the mail domain settings

Overwrites the portal's trusted mail domain configuration, which controls which email domains are treated as already verified when a user is invited or self-registers. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). When the requested mode is a custom domain list, every domain is normalized to lowercase and checked against the expected hostname format; a domain that fails the check, or an empty custom list, causes the whole call to be rejected without saving anything. For the other modes the domain list in the request is ignored. The `inviteUsersAsVisitors` flag controls whether users who join through a trusted domain are added as full members or as visitors, and takes effect on the next join rather than retroactively. This is a mutating, idempotent call: repeating it with the same body leaves the portal in the same state. On success it returns a confirmation message, not the saved settings themselves; read them back from `GET api/2.0/settings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MailDomainSettingsRequestsDto** | body | [**MailDomainSettingsRequestsDto**](../../models/mail-domain-settings-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Confirmation message that the trusted mail domain settings were saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
