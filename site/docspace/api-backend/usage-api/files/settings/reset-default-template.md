# resetDefaultTemplate

> DefaultTemplateSettingsWrapper resetDefaultTemplate(DefaultTemplateSettingsResetRequestDto)

`DELETE /api/2.0/files/settings/defaulttemplate`

Reset the default template setting

Deletes the custom blank of one extension. New files of that extension then start from the built-in blank. It returns all blanks after the reset. The extension comes in the request body. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. It deletes the stored copy of the blank, but not the file it was copied from. Files already created from the blank do not change. You can repeat it. Without a custom blank, the call changes nothing. It also changes nothing for an extension outside the built-in template set. If the body has no `fileExtension`, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultTemplateSettingsResetRequestDto** | body | [**DefaultTemplateSettingsResetRequestDto**](../../models/default-template-settings-reset-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension after the reset | [**DefaultTemplateSettingsWrapper**](../../models/default-template-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `fileExtension` | - | - |
| **403** | The caller has no portal-settings right | - | - |
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
