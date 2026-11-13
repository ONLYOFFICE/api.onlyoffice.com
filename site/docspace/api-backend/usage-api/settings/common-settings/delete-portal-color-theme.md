# deletePortalColorTheme

> CustomColorThemesSettingsWrapper deletePortalColorTheme(id)

`DELETE /api/2.0/settings/colortheme`

Delete a color theme

Deletes a custom color theme of the portal by its ID. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data, and you can repeat it. For the ID of a built-in or a deleted theme, it changes nothing and returns no error. If the deleted theme was selected, the portal selects the theme with the lowest remaining ID. It returns all remaining themes and the selected one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **Integer** (int32) | The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does one that is already gone - neither is reported as an error. Removing the theme currently in use moves the portal to the remaining theme with the lowest ID. | [required] [example: `1`] |

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

- **Content-Type**: Not defined
- **Accept**: application/json
