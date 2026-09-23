# deletePortalColorTheme

Referenced types are defined in the [full reference](../api.md).

> CustomColorThemesSettingsWrapper deletePortalColorTheme(id)

`DELETE /api/2.0/settings/colortheme`

Delete a color theme

Removes a custom color theme from the portal by its ID. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). An ID belonging to one of the built-in default themes is not removable; the call succeeds but leaves the theme list unchanged. If the deleted theme was the currently selected one, the theme with the lowest remaining ID is selected automatically. This is a mutating, idempotent call: deleting an ID that is already gone succeeds without error and again leaves nothing changed. It returns the full updated theme configuration, including the (possibly new) selected theme.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | query | **Integer** (int32) | The theme to remove, by theme ID. An ID belonging to a built-in theme leaves the list untouched, and so does one that is already gone - neither is reported as an error. Removing the theme currently in use moves the portal to the remaining theme with the lowest ID. | [required] [example: `1`] |

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

- **Content-Type**: Not defined
- **Accept**: application/json
