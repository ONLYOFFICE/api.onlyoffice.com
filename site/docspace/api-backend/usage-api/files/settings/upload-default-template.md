# uploadDefaultTemplate

> DefaultTemplateSettingsWrapper uploadDefaultTemplate(FileExtension, File)

`POST /api/2.0/files/settings/defaulttemplate`

Upload a file as the default template setting

Uploads a document and makes it the blank the portal creates for one extension, and returns the full set of templates as it now stands. The request is multipart form data carrying the file, while the extension travels in the `FileExtension` query parameter; the extension of the uploaded file name must be exactly that one, or the call answers 403. A PDF is additionally checked to be a fillable form, and answers 403 as well when it is not one. The upload is capped at 100 MB and a larger body answers 400 while it is still streaming in. The file is stored in the portal's template storage and the file that served as the previous custom blank for that extension is deleted; an extension the built-in template set does not cover leaves everything unchanged. Requires the portal settings permission. Use `PUT api/2.0/files/settings/defaulttemplate` to reuse a document that is already in the portal.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **FileExtension** | query | **String** | The extension the uploaded blank is set for, written in lower case with the leading dot, and travelling in the query string rather than in the form. It must match the extension of the uploaded file name. Only the extensions the portal's built-in template set covers are accepted, and `GET api/2.0/files/settings/defaulttemplate` returns exactly that list; an extension outside it leaves the settings unchanged instead of failing. | [required] [example: `.docx`] |
| **File** | form | **File** (binary) | The template document itself. Its file name must end with the extension named above, a PDF must be a fillable form, and the body is capped at 100 MB - a larger one is refused while it is still streaming in. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension after the upload | [**DefaultTemplateSettingsWrapper**](../../models/default-template-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The uploaded file is missing or larger than the 100 MB limit | - | - |
| **403** | The caller may not read the portal settings, or the file does not match the requested extension | - | - |
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

- **Content-Type**: multipart/form-data
- **Accept**: application/json
