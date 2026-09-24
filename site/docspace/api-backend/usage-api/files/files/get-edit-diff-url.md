# getEditDiffUrl

> EditHistoryDataWrapper getEditDiffUrl(fileId, version)

`GET /api/2.0/files/file/{fileId}/edit/diff`

Get changes URL

Answers with everything an editor needs in order to show what changed in one version of a file: the address of the version itself, its document key and format, the address of the recorded changes, the same trio for the version it is compared against, and a token that signs the whole answer for the document service. `version` picks the version, and 0, the default, means the current one. `changesUrl` and `previous` are filled in only when the portal has stored the changes of that version, which is the case for versions written by an editing session; for a version uploaded as a whole they stay empty and only the file itself can be shown. The addresses are meant for the document service and carry their own time-limited keys. The caller needs the right to read the history of the file, which editing access and above grant: read-only access, commenting access, a guest and an anonymous caller are all refused, as is a file kept in a connected third-party storage. The operation is read-only. For the list of versions themselves use `GET api/2.0/files/file/{fileId}/edit/history`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose changes are read. | [required] [example: `1`] |
| **version** | query | **Integer** (int32) | The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the current version. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The addresses and keys the editor needs to show the changes | [**EditHistoryDataWrapper**](../../models/edit-history-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EditHistoryDataWrapper**](../../models/edit-history-data-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
