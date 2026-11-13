# saveGreetingSettings

> StringWrapper saveGreetingSettings(GreetingSettingsRequestDto)

`POST /api/2.0/settings/greetingsettings`

Save the greeting settings

Replaces the greeting title of the current portal with `title` and stores it as the portal name. An empty `title` clears the title. Then the portal shows the built-in default caption, and `GET api/2.0/settings/greetingsettings/isdefault` returns `true`. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and the new title applies immediately to every user of the portal. You can repeat it with the same body. On a free or trial cloud plan, the call checks the title against the character rule of the installation. A paid cloud plan and a server installation skip this check. The call returns a localized confirmation message, not the stored title. To read the title, use `GET api/2.0/settings/greetingsettings`. The call returns 400 if `title` is missing, too long, or breaks the character rule.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **GreetingSettingsRequestDto** | body | [**GreetingSettingsRequestDto**](../../models/greeting-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A localized message confirming that the greeting title has been saved | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title`, the `title` is longer than 255 characters, or on a free or trial cloud plan it breaks the character rule of the installation | - | - |
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
