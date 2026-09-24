# getDefaultTemplates

> DefaultTemplateSettingsWrapper getDefaultTemplates()

`GET /api/2.0/files/settings/defaulttemplate`

Get the default template setting

Returns the blank document the portal creates for each format: one entry per extension the built-in template set covers, with the file that has been chosen as the blank for it, if any. An entry whose `selectedFile` is null means no custom template has been set and the built-in blank is used; the remaining fields - title, size, modification moment and view address - are filled only for a custom one. The list is assembled from the portal's built-in template set on every call, so an extension the set no longer covers disappears from it. Entries come in the order the interface shows them: the text document, spreadsheet, presentation and PDF formats first, the rest by extension. Reading the setting requires the portal settings permission, so only the portal owner and a DocSpace administrator may call it. Use `PUT api/2.0/files/settings/defaulttemplate` to choose an existing file and the matching POST to upload one.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension | [**DefaultTemplateSettingsWrapper**](../../models/default-template-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DefaultTemplateSettingsWrapper**](../../models/default-template-settings-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
