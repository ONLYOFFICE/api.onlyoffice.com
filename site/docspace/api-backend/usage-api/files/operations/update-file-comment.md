# updateFileComment

> StringWrapper updateFileComment(fileId, UpdateCommentRequest)

`PUT /api/2.0/files/file/{fileId}/comment`

Update a comment

Changes the comment of one version of a file and returns the stored comment. An empty comment clears it. Requires the right to change the version history, which a room manager and a content creator have. Other callers get 403, including an editor of another user's file. The call changes data, and you can repeat it with the same body. If the version does not exist, the call returns 400. If no file has this id, the call returns 404. A file that another user locked or a file in the trash also returns 403. To read the comments of all versions, use `GET api/2.0/files/file/{fileId}/edit/history`.  Raises the `file.updated` webhook.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose version comment is replaced. | [required] [example: `1`] |
| **UpdateCommentRequest** | body | [**UpdateCommentRequest**](../../models/update-comment-request.md) | The version and the comment to store on it. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The comment as it was stored | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `version`, the version is below 1 or does not exist, or the comment is longer than 255 characters | - | - |
| **403** | The caller may not change the version history of the file, or the file is locked by somebody else | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose version comment is replaced. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
