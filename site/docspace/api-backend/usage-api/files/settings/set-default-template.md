# setDefaultTemplate

> DefaultTemplateSettingsWrapper setDefaultTemplate(DefaultTemplateSettingsRequestDto)

`PUT /api/2.0/files/settings/defaulttemplate`

Change the default template setting

Makes a copy of an existing file the blank for new files of one extension. It returns all blanks after the change. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. Later edits of the original file do not change the blank. The call deletes the previous custom blank of that extension. So a repeated call makes a new copy and deletes the previous one. If the extension is not in the built-in template set, the call changes nothing. If the caller cannot copy the file, the call returns 403. The call returns 400 if `selectedFile` is neither a number nor a string. It also returns 400 if the file extension is not exactly `fileExtension`, including case. If the file does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultTemplateSettingsRequestDto** | body | [**DefaultTemplateSettingsRequestDto**](../../models/default-template-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension after the change | [**DefaultTemplateSettingsWrapper**](../../models/default-template-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `selectedFile` or `fileExtension`, the file identifier is of an unsupported kind, or its extension is not the one requested | - | - |
| **403** | The caller has no portal-settings right, or may not copy the selected file | - | - |
| **404** | The selected file does not exist | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
