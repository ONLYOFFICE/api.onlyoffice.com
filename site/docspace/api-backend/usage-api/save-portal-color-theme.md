# savePortalColorTheme

Referenced types are defined in the [full reference](../api.md).

> CustomColorThemesSettingsWrapper savePortalColorTheme(CustomColorThemesSettingsRequestsDto)

`PUT /api/2.0/settings/colortheme`

Save a color theme

Adds or updates a custom color theme, or changes which theme is selected, for the whole portal. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). Pass `theme` to create or edit one: an existing theme is matched and updated by its ID, a new one is appended, and an ID that collides with a built-in default theme is treated as a request to create a new custom theme instead of overwriting the default. Once the plan's custom-theme limit is reached, a new theme is silently not added rather than rejected with an error, so check the returned `themes` count against `limit` before assuming it was saved. Pass `selected` to switch the active theme; an ID that does not match any existing theme is ignored. This is a mutating call, not strictly idempotent once the limit has been reached. It returns the full updated theme configuration.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CustomColorThemesSettingsRequestsDto** | body | [**CustomColorThemesSettingsRequestsDto**](../api.md#model-customcolorthemessettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Updated color theme configuration: saved themes, selected theme, and plan limit | [**CustomColorThemesSettingsWrapper**](../api.md#model-customcolorthemessettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomColorThemesSettingsWrapper**](../api.md#model-customcolorthemessettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
