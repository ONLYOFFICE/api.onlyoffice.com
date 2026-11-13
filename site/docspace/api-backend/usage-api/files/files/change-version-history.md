# changeVersionHistory

> FileArrayWrapper changeVersionHistory(fileId, ChangeHistoryRequest)

`PUT /api/2.0/files/file/{fileId}/history`

Change version history

Closes or reopens a revision group in the version history of a file. It returns every stored version of the file, newest first. A `version` of 0 means the current version. With `continueVersion=false`, the call copies the current version as a new version. That version starts a new revision group, so later edits no longer extend the previous one. For an older `version`, or while someone edits the file, it changes nothing. With `continueVersion=true`, the call merges the revision group after `version` into the group of `version`. If no group follows it, nothing changes. Requires the right to change the version history, which a room manager and a content creator have. Other callers get 403, including an editor. The call changes data. Do not repeat it. With `continueVersion=false`, a repeat adds another version only if `version` is 0. With `continueVersion=true`, each call merges the next revision group, if any, into the group of `version`. If the body has no `version`, the call returns 400. If the file or the version does not exist, the call returns 404. If copying the current version exceeds the room or user storage quota, the call returns 402. A file that another user locked also returns 403. The call does not work for a file in the trash or on a third-party storage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose version history is changed. | [required] [example: `1`] |
| **ChangeHistoryRequest** | body | [**ChangeHistoryRequest**](../../models/change-history-request.md) | The change to make to the revision group. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The versions of the file after the change | [**FileArrayWrapper**](../../models/file-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `version` | - | - |
| **402** | Completing the current version needs more space than the room or user storage quota leaves | - | - |
| **403** | The caller may not change the version history of the file, or the file is locked by somebody else | - | - |
| **404** | The file id, or the requested version of it, resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileArrayWrapper**](../../models/file-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose version history is changed. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileArrayWrapper**](../../models/third-party-file-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
