# updateFile

> FileIntegerWrapper updateFile(fileId, UpdateFile)

`PUT /api/2.0/files/file/{fileId}`

Update a file

Renames a file, restores one of its versions, or both at once, and answers with the file as it now stands. A non-empty `title` renames the file, keeping the stored extension whatever the new title says, so a rename cannot change the format; an empty or missing title leaves the name alone. A `lastVersion` above 0 restores that version the way `POST api/2.0/files/file/{fileId}/restoreversion` does, storing its content again on top of the history, while 0 or less leaves the versions untouched and answers with the file as it is - which makes this operation a read of the file when both fields are left out. The caller needs edit access, and renaming somebody else's file additionally needs room-manager rights: a member or room admin with plain editing access, read-only access, a guest and a DocSpace admin who is not a member of the room are all refused with 403, while a content creator may rename a file of their own. The call is mutating. Renaming marks the file as new for everybody else who can read it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to update. | [required] [example: `1`] |
| **UpdateFile** | body | [**UpdateFile**](../../models/update-file.md) | The new title and the version to restore. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file after the rename, the restore, or both | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not rename the file or change its version | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
