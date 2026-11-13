# uploadDefaultTemplate

> DefaultTemplateSettingsWrapper uploadDefaultTemplate(fileExtension, file)

`POST /api/2.0/files/settings/defaulttemplate`

Upload a file as the default template setting

Uploads a file and makes it the blank for new files of one extension. It returns all blanks after the upload. Send the file as multipart form data and the extension in the `fileExtension` query parameter. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data and deletes the previous custom blank of that extension. So a repeated call stores a new copy and deletes the previous one. If the extension is not in the built-in template set, the call changes nothing. The call returns 400 if the file is missing, is larger than 100 MB, or has another extension. The extension comparison is case-sensitive. If a PDF is not a fillable form, the call returns 403. To use a file that is already in the portal, use `PUT api/2.0/files/settings/defaulttemplate`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileExtension** | query | **String** | The extension the uploaded blank is set for, written in lower case with the leading dot, and travelling in the query string rather than in the form. It must match the extension of the uploaded file name. Only the extensions the portal's built-in template set covers are accepted, and `GET api/2.0/files/settings/defaulttemplate` returns exactly that list; an extension outside it leaves the settings unchanged instead of failing. | [required] [example: `.docx`] |
| **file** | form | **File** (binary) | The template document itself. Its file name must end with the extension named above, a PDF must be a fillable form, and the body is capped at 100 MB - a larger one is refused while it is still streaming in. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The blank document configured for each supported extension after the upload | [**DefaultTemplateSettingsWrapper**](../../models/default-template-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The uploaded file is missing or larger than the 100 MB limit, or its file name does not end with the requested extension | - | - |
| **403** | The caller has no portal-settings right, or the uploaded PDF is not a fillable form | - | - |
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
