# getEditDiffUrl

> EditHistoryDataWrapper getEditDiffUrl(fileId, version)

`GET /api/2.0/files/file/{fileId}/edit/diff`

Get changes URL

Returns what an editor needs to show the changes of one file version. It holds the address, key, and format of the version, and the same for the version before it. It also holds the address of the changes and a token that signs the answer for the document service. A `version` of 0 means the current version. Requires the right to read the file history, which editing access gives. Other callers get 403, including read-only and commenting access. An anonymous caller and a file in a third-party storage also get 403. The call is read-only. The fields `changesUrl` and `previous` are set only if the portal stored the changes of the version. An editing session stores them, and an uploaded version has none. If there is no earlier version, `previous` points to a blank template. The addresses carry their own time-limited keys. If the file or the version does not exist, the call returns 404. To list the versions, use `GET api/2.0/files/file/{fileId}/edit/history`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose changes are read. | [required] [example: `1`] |
| **version** | query | **Integer** (int32) | The version to show the changes of, as reported by `GET api/2.0/files/file/{fileId}/edit/history`; 0 means the current version. | [optional] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The addresses and keys the editor needs to show the changes | [**EditHistoryDataWrapper**](../../models/edit-history-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the history of the file, as with an anonymous caller, read-only or commenting access, or a file in a third-party storage | - | - |
| **404** | The file id, or the requested version of it, resolves to nothing | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EditHistoryDataWrapper**](../../models/edit-history-data-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose changes are read. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
