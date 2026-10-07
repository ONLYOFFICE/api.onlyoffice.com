# moveBatchItems

> FileOperationArrayWrapper moveBatchItems(BatchRequestDto)

`PUT /api/2.0/files/fileops/move`

Move files and folders

Queues a background job that moves the requested files and folders into `destFolderId`, removing them from where they were, and answers with the caller's move and copy operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports `finished`. Before starting, `GET api/2.0/files/fileops/move` reports which items already have a same-named entry at the destination and `conflictResolveType` decides what happens to them, while `GET api/2.0/files/fileops/checkdestfolder` reports whether the destination accepts the files at all. The caller needs create access to the destination and the right to take the items out of their source, which is why room members with editing or review rights are refused with 403, and why content-creator rights inside a room allow copying an item out of it but not moving it. A room cannot be moved this way — use `PUT api/2.0/files/rooms/{id}/archive` instead. To keep the originals use `PUT api/2.0/files/fileops/copy`. An empty selection queues nothing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BatchRequestDto** | body | [**BatchRequestDto**](../../models/batch-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The move and copy operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the destination folder or cannot take one of the items out of its source, the destination is a listed folder or lies inside one, a folder or several files are moved into a form-filling room from outside it, the room or user quota would be exceeded, a file that is not a PDF form goes to a form-filling room, or a file to overwrite is locked or cannot be edited by the caller | - | - |
| **404** | The destination folder, a listed file or a listed folder other than the first one does not exist | - | - |
| **415** | A listed file has a format the portal does not accept for upload, or one a knowledge folder cannot index | - | - |
| **500** | The first listed folder does not exist, or an id is a number that is not a 32-bit integer | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
