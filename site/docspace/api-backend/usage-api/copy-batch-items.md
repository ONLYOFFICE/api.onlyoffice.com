# copyBatchItems

Referenced types are defined in the [full reference](../files.md).

> FileOperationArrayWrapper copyBatchItems(BatchRequestDto)

`PUT /api/2.0/files/fileops/copy`

Copy files and folders

Queues a background job that copies the requested files and folders into `destFolderId`, leaving the originals where they are, and answers with the caller's move and copy operations, including the one just started. Poll `GET api/2.0/files/fileops` until the operation reports `finished`; its `files` and `folders` then name what was produced. Before starting, `GET api/2.0/files/fileops/move` reports which items already have a same-named entry at the destination and `conflictResolveType` decides what happens to them, while `GET api/2.0/files/fileops/checkdestfolder` reports whether the destination accepts the files at all. The caller needs create access to the destination — room manager or content-creator rights inside a room — and read access to every source item; anything less is refused with 403. With `content=true` each listed folder is replaced by its own files and subfolders, so the folder itself is not recreated at the destination. An empty selection queues nothing and answers with the operations that are already there. To remove the originals instead use `PUT api/2.0/files/fileops/move`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BatchRequestDto** | body | [**BatchRequestDto**](../files.md#model-batchrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The move and copy operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the destination folder, or cannot read one of the listed items | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationArrayWrapper**](../files.md#model-fileoperationarraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
