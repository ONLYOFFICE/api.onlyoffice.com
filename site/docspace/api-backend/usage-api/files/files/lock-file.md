# lockFile

> FileWrapper lockFile(fileId, LockFileRequest)

`PUT /api/2.0/files/file/{fileId}/lock`

Lock a file

Locks a file so that only its owner and room managers can change it, or removes the lock. It returns the file with its lock state. With `lockFile=true`, the call removes all other users from the editing session of the file. The lock then blocks editing, renaming, and deleting for everyone except its owner and room managers. With `lockFile=false`, the call adds a note about the unlock to the comment of the current version. A file in a third-party storage gets no note. Requires the right to lock the file, which a room manager and a content creator have. Other callers get 403. A file in the trash also returns 403. Only a room manager can remove a lock that another user set. The call changes data. You can repeat it with the same body. A repeated call changes nothing and returns the file again. If no file has this id, the call returns 404.  Raises the `file.updated` webhook on every call, even one that changes nothing, and twice for an unlock in portal storage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to lock or unlock. | [required] [example: `1`] |
| **LockFileRequest** | body | [**LockFileRequest**](../../models/lock-file-request.md) | The lock state to reach. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file with its lock state as it now stands | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not lock or unlock the file | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to lock or unlock. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
