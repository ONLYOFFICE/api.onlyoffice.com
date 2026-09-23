# resetDefaultTemplate

Referenced types are defined in the [full reference](../files.md).

> DefaultTemplateSettingsWrapper resetDefaultTemplate(DefaultTemplateSettingsResetRequestDto)

`DELETE /api/2.0/files/settings/defaulttemplate`

Reset the default template setting

Drops the custom blank document configured for one extension and returns the full set of templates as it now stands. New documents of that extension are created from the portal's built-in blank again, and the file that served as the custom one is deleted from the template storage - the original the template was copied from is untouched. The extension is named in the request body, and the entry for it comes back with `selectedFile` null. Resetting an extension that has no custom blank is accepted and changes nothing, which makes a repeated call safe; an extension the built-in template set does not cover is ignored in the same way. Requires the portal settings permission, so only the portal owner and a DocSpace administrator may call it. To set a blank instead of dropping it, use `PUT api/2.0/files/settings/defaulttemplate`. Documents already created from the custom blank are left as they are - the reset only decides what the next new document of that extension starts from. The set as it stands can also be read with `GET api/2.0/files/settings/defaulttemplate`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultTemplateSettingsResetRequestDto** | body | [**DefaultTemplateSettingsResetRequestDto**](../files.md#model-defaulttemplatesettingsresetrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension after the reset | [**DefaultTemplateSettingsWrapper**](../files.md#model-defaulttemplatesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DefaultTemplateSettingsWrapper**](../files.md#model-defaulttemplatesettingswrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
