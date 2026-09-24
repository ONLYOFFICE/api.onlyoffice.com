# restoreFileVersion

> EditHistoryArrayWrapper restoreFileVersion(fileId, version, url)

`POST /api/2.0/files/file/{fileId}/restoreversion`

Restore a file version

Brings an earlier version of a file back and answers with the editing revisions of the file after the restore. Nothing is overwritten: the content of the chosen version is stored again as a new version on top of the history, carrying a comment that says which version it was reverted to, so the intervening versions stay readable. `url` changes the source - with it the content is fetched from that address, which is how the document service returns a document with a set of changes rolled back, and the new version records that instead. Any links that pointed at drafts of the file are dropped, and the file is marked as new for the other people who can read it. `version` has to name an existing version and is refused with 400 when it is missing or already the current one. The caller needs the right to edit the history of the file and is otherwise refused with 403, an anonymous caller included. The call is mutating and not idempotent. A locked file, one in Trash, one being edited, an encrypted one and one kept in a connected third-party storage are all refused.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose version is restored. | [required] [example: `1`] |
| **version** | query | **Integer** (int32) | The version to restore, as reported by `GET api/2.0/files/file/{fileId}/edit/history`. It has to name an existing version that is not the current one. | [optional] [example: `1`] |
| **url** | query | **String** | The address the content of the new version is fetched from instead of the stored version, which is how the document service hands back a document with a set of changes rolled back; left out, the stored version is used. | [optional] [example: `https://document-server.example.com/cache/files/conv_1_docx/output.docx`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The editing revisions of the file after the restore | [**EditHistoryArrayWrapper**](../../models/edit-history-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The version is missing or is already the current one | - | - |
| **403** | The caller may not change the version history of the file | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EditHistoryArrayWrapper**](../../models/edit-history-array-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
