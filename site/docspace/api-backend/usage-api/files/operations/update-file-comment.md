# updateFileComment

> StringWrapper updateFileComment(fileId, UpdateCommentRequest)

`PUT /api/2.0/files/file/{fileId}/comment`

Update a comment

Replaces the comment stored on one version of a file - the note that explains what changed in it - and answers with the comment as it was stored, which is the text cut to the length the portal keeps. `version` names the version and has to be an existing one: a version that does not exist is rejected as an invalid request, while a file that does not exist at all is answered as not found. Sending an empty comment clears the note. The caller needs the right to edit the history of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator rights have; a member with editing access to somebody else's file, read-only access, a guest and an anonymous caller are all refused. A file that is locked by somebody else or lies in Trash is refused as well. The call is mutating and idempotent - repeating it with the same text leaves the same comment. The comments of all versions come back with `GET api/2.0/files/file/{fileId}/edit/history`.

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
