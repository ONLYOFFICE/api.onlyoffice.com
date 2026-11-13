# getFilesSettings

> FilesSettingsWrapper getFilesSettings()

`GET /api/2.0/files/settings`

Get file settings

Returns the Files settings of the caller and the portal in one object. The object has the caller's preferences, the portal switches, the format tables, the editor URLs, and the upload limits. Any signed-in user can call it. A visitor with an external link can also call it without signing in. Other callers get 401. The call is read-only. Most setting calls of this section return only the value they changed. Read the other values here.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full set of file settings for the caller and the portal | [**FilesSettingsWrapper**](../../models/files-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller is neither signed in nor opening an external link | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FilesSettingsWrapper**](../../models/files-settings-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
