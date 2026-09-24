# lockFile

> FileIntegerWrapper lockFile(fileId, LockFileParameters)

`PUT /api/2.0/files/file/{fileId}/lock`

Lock a file

Locks a file so that nobody else can change it, or releases that lock, and answers with the file as it now stands. With `lockFile=true` the lock is put on the file and everybody else who is editing it at that moment is dropped out of the session, the caller excepted; the lock then blocks editing, renaming and deleting for everybody but the account that set it and the room admins. With `lockFile=false` the lock is removed and a note about the unlocking is appended to the current version comment, unless the file lives in a connected third-party storage. Locking a file that is already locked, or unlocking one that is not, changes nothing and still answers with the file, so the call is idempotent in effect while remaining a mutating one. The caller needs the right to lock the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator rights have; a member without access to the room and a guest are refused, and so is a file in Trash. A lock set by somebody else can only be released by a room manager.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to lock or unlock. | [required] [example: `1`] |
| **LockFileParameters** | body | [**LockFileParameters**](../../models/lock-file-parameters.md) | The lock state to reach. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file with its lock state as it now stands | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
