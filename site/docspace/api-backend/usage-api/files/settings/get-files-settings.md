# getFilesSettings

> FilesSettingsWrapper getFilesSettings()

`GET /api/2.0/files/settings`

Get file settings

Returns the whole Files configuration in one object: the caller's own preferences (trash auto-clearing, default sharing rights, hidden confirmation dialogs, archive format, section visibility), the portal-wide switches an administrator controls (third-party storages, external sharing), and the static tables a client needs to work with documents - which extensions can be viewed, edited, converted or uploaded, the URL templates for the viewer, editor and thumbnails, and the upload limits. This is the read side of the setting operations in this section: each of those answers with the one value it wrote, and only the trash auto-clearing and default-template settings have a GET of their own. Marked as allowing anonymous access because the external-link pages read the extension tables before signing in, but a caller with neither a session nor a valid link key is still rejected. The result is not filtered by role and is not paginated; fetch it once per session rather than before each file action.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full set of file settings for the caller and the portal | [**FilesSettingsWrapper**](../../models/files-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FilesSettingsWrapper**](../../models/files-settings-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
