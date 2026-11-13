# updateFile

> FileWrapper updateFile(fileId, UpdateFileRequest)

`PUT /api/2.0/files/file/{fileId}`

Update a file

Renames a file, restores one of its versions, or both, and returns the file. A non-empty `title` renames the file but keeps the stored extension. So a rename cannot change the format. An empty `title` keeps the name. A `lastVersion` above 0 restores that version as `POST api/2.0/files/file/{fileId}/restoreversion` does. With both fields empty, the call only reads the file. Requires editing access to the file. Other callers get 403, including a DocSpace admin who is not a room member. Renaming the file of another user also requires the room manager role. A content creator can rename their own files. An anonymous caller without an external link gets 401. The call changes data. You can repeat a rename with the same body, but each restore adds a version. In Dropbox, SharePoint, and WebDAV storages, a rename changes the file id. A repeat then needs the new id from the response. A rename marks the file as new for the other users who can read it. If `lastVersion` is the current version, the call returns 400. A `lastVersion` above the current one copies the current version. If the file or `lastVersion` does not exist, the call returns 404. For a caller who may only fill forms, a form whose filling has not started also returns 404. If the restore exceeds the room or user storage quota, the call returns 402. A file that another user locked also returns 403.  Raises the `file.updated` webhook for a rename that takes effect, and again for a switch to `lastVersion`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to update. | [required] [example: `1`] |
| **UpdateFileRequest** | body | [**UpdateFileRequest**](../../models/update-file-request.md) | The new title and the version to restore. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file after the rename, the restore, or both | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The title is longer than 165 characters, or `lastVersion` is the current version | - | - |
| **401** | An anonymous caller has no external link | - | - |
| **402** | Restoring `lastVersion` needs more space than the room or user storage quota leaves | - | - |
| **403** | The caller may not read or rename the file or change its version, or the file is locked by somebody else | - | - |
| **404** | The file id, or `lastVersion` of it, resolves to nothing, or the file is a PDF form in a form-filling room whose filling has not started and the caller may only fill forms there | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to update. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
