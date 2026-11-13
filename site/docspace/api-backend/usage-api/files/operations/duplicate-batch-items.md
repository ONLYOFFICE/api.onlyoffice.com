# duplicateBatchItems

> FileOperationArrayWrapper duplicateBatchItems(DuplicateRequestDto)

`PUT /api/2.0/files/fileops/duplicate`

Duplicate files and folders

Starts a background job that copies each listed file and folder into the folder that holds it. A copy gets the name of the original with a number added. The call copies a folder with its content. Requires the right to create content in the folder that holds each item. Other callers get 403. In a room, a member with the Editing or Read role also gets 403. The call queues work. Repeat `GET api/2.0/files/fileops` until `finished` is true. Do not repeat the call. Each call adds one more copy of every item. The call returns the duplicate operations of the caller, including the new one. An empty selection queues nothing and returns the existing operations. To copy items to another folder, use `PUT api/2.0/files/fileops/copy`. The call also returns 403 for an item in an archived room or in the Trash. If a listed file or folder does not exist, the call returns 404. The call returns 415 for a file format the portal does not accept for upload.  Raises the `folder.copied` webhook for every duplicated folder, the folders inside it included. Raises the `room.copied` webhook for every listed room, an AI agent included. Raises the `file.copied` webhook for every duplicated file, including the files inside duplicated folders and rooms.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DuplicateRequestDto** | body | [**DuplicateRequestDto**](../../models/duplicate-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The duplicate operations of the caller, the one just queued included | [**FileOperationArrayWrapper**](../../models/file-operation-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot create items in the folder that holds one of the listed items, or cannot copy that item | - | - |
| **404** | A listed file or folder does not exist | - | - |
| **415** | A listed file has a format the portal does not accept for upload | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
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
