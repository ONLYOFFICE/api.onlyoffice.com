# restoreFileVersion

> EditHistoryArrayWrapper restoreFileVersion(fileId, version, url)

`POST /api/2.0/files/file/{fileId}/restoreversion`

Restore a file version

Restores an earlier version of a file and returns the editing revisions after the restore. The call stores the content of the version again as a new version, with a comment that names it. The versions in between stay. With `url`, the call takes the content from that address instead. The document service uses it to return a document with some changes rolled back. Requires the right to change the version history. Other callers get 403, including an anonymous caller. With `url`, the call also requires editing access. The call changes data. Do not repeat it. Each call adds another version. The call deletes the links to drafts of the file. It marks the file as new for the other users who can read it. If `version` is missing or is the current version, the call returns 400. Without `url`, a `version` above the current one copies the current version. If the file or the version does not exist, the call returns 404. If the content exceeds the storage quota, the call returns 402. A file that another user locked also returns 403. Without `url`, the call does not work for an encrypted file or a file that someone is editing. It also does not work for a file in the trash or on a third-party storage.  Raises the `file.updated` webhook.

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
| **402** | The restored content does not fit into the storage quota | - | - |
| **403** | The caller may not change the version history of the file, the file is locked by somebody else, or, with `url`, may not edit the file or the file is being edited | - | - |
| **404** | Without `url`, the file id or the requested version resolves to nothing | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EditHistoryArrayWrapper**](../../models/edit-history-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose version is restored. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
