# saveGreetingSettings

> StringWrapper saveGreetingSettings(GreetingSettingsRequestsDto)

`POST /api/2.0/settings/greetingsettings`

Save the greeting settings

Replaces the greeting title of the current portal with the `title` from the request, storing it as the portal name. The caller needs the portal-settings right of a DocSpace administrator, otherwise the call is refused. The new caption takes effect at once for every user of the portal and the change is written to the audit trail; repeating the call with the same title leaves the portal in the same state. A missing `title` or one longer than 255 characters is rejected as an invalid request before the handler runs. On a cloud portal with a free or trial plan the title is also matched against the character rule configured for the installation and a title that breaks it is refused, while a paid cloud plan and a server installation apply no character check. An empty `title` clears the greeting: the portal falls back to the built-in default caption and `GET api/2.0/settings/greetingsettings/isdefault` starts answering `true`. What comes back is a localized confirmation message, not the stored title - read the title with `GET api/2.0/settings/greetingsettings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **GreetingSettingsRequestsDto** | body | [**GreetingSettingsRequestsDto**](../../models/greeting-settings-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the greeting title has been saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
