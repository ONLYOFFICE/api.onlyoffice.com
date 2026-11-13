# checkUpload

> StringArrayWrapper checkUpload(folderId, CheckUploadRequest)

`POST /api/2.0/files/{folderId}/upload/check`

Check for upload conflicts

Returns the names from `filesTitle` that a file in the folder already has. Use it before an upload to choose between a new version and another name. The match ignores case. The call skips encrypted files, since an upload cannot replace them. Requires the right to create content in the folder. Other callers get 403. In a room, its owner, room managers, and content creators have it. A guest has it there only as a content creator. In My documents, the owner and anyone with read and write access to the folder have it. An archived room, the Archive or room templates root, and an AI agent or AI project root also return 403. The call is read-only. The list has no repeats and no order. An empty list means that every name is free. A missing folder returns 404. The call returns 400 if `filesTitle` is missing. An empty `filesTitle` returns an empty list. In a form-filling room template, a name without the `.pdf` extension returns 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose contents the names are tested against; take the id from a listing such as `GET api/2.0/files/@root`. | [required] [example: `1`] |
| **CheckUploadRequest** | body | [**CheckUploadRequest**](../../models/check-upload-request.md) | The names to test against the files the folder already holds. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The submitted titles that already belong to a file in the folder | [**StringArrayWrapper**](../../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `filesTitle` | - | - |
| **403** | The caller cannot add content to the folder, or a title that is not a PDF is checked against a form-filling room template | - | - |
| **404** | No folder with the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringArrayWrapper**](../../models/string-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **String** | The folder whose contents the names are tested against; take the id from a listing such as &#x60;GET api/2.0/files/@root&#x60;. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
