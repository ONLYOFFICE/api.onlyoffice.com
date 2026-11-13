# savePortalColorTheme

> CustomColorThemesSettingsWrapper savePortalColorTheme(CustomColorThemesSettingsRequestDto)

`PUT /api/2.0/settings/colortheme`

Save a color theme

Adds or changes a custom color theme of the portal, or selects the theme that the portal uses. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. With `theme`, the call changes the theme with the same ID or adds a new one. A repeated call with a theme ID of 0 adds another theme. A built-in theme ID also adds a new theme and keeps the built-in one. If the portal already has `limit` themes, the call skips a new theme and returns no error. So compare the returned `themes` with what you sent. With `selected`, the call applies the theme with that ID. It ignores an ID that no theme has. It returns all themes and the selected one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CustomColorThemesSettingsRequestDto** | body | [**CustomColorThemesSettingsRequestDto**](../../models/custom-color-themes-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Updated color theme configuration: saved themes, selected theme, and plan limit | [**CustomColorThemesSettingsWrapper**](../../models/custom-color-themes-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomColorThemesSettingsWrapper**](../../models/custom-color-themes-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
