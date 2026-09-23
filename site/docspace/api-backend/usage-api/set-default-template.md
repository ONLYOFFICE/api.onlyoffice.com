# setDefaultTemplate

Referenced types are defined in the [full reference](../files.md).

> DefaultTemplateSettingsWrapper setDefaultTemplate(DefaultTemplateSettingsRequestDto)

`PUT /api/2.0/files/settings/defaulttemplate`

Change the default template setting

Makes an existing document the blank the portal creates for one extension, and returns the full set of templates as it now stands. The file is copied into the portal's template storage, so later edits of the original do not change the blank, and the file that served as the previous custom blank for that extension is deleted. `selectedFile` takes the identifier of a file the caller may copy - a number for a document stored in the portal, a string for one in a connected third-party storage - and its extension must be the one named in `fileExtension`; a mismatch or an identifier of another kind answers 400, a file the caller may not copy answers 403, and a file that is not there is answered as missing. An extension the built-in template set does not cover is not an error: the call succeeds and changes nothing, so compare the answer with what was asked for. Requires the portal settings permission.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DefaultTemplateSettingsRequestDto** | body | [**DefaultTemplateSettingsRequestDto**](../files.md#model-defaulttemplatesettingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension after the change | [**DefaultTemplateSettingsWrapper**](../files.md#model-defaulttemplatesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The file identifier is of an unsupported kind, or its extension is not the one requested | - | - |
| **403** | The caller may not read the portal settings, or may not copy the selected file | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DefaultTemplateSettingsWrapper**](../files.md#model-defaulttemplatesettingswrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
