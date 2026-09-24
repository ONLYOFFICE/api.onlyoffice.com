# getFolderInfo

> FolderIntegerWrapper getFolderInfo(folderId)

`GET /api/2.0/files/folder/{folderId}`

Get folder information

Returns one folder as an object - its title, its parent, the moments it was created and last changed, the access the caller has to it, the number of items that are new for them, and the room settings when the folder is a room - without listing anything inside it. Use it to resolve a folder identifier into something displayable, and `GET api/2.0/files/{folderId}` when the contents are what is wanted; unlike that operation, this one leaves the new-item marks of the folder alone. Any member who can read the folder may call it, and an anonymous caller only through an external link that grants access, everybody else being refused; a folder that does not exist is answered as not found. The call is read-only. The chain of parents above the folder is not part of the answer and is read with `GET api/2.0/files/folder/{folderId}/path`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The folder itself - its title, its parent, the moments it was created and changed, the access the caller has to it, how many items in it are new for them, and the room settings when the folder is a room; nothing about the items it holds | [**FolderIntegerWrapper**](../../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../../models/folder-integer-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
