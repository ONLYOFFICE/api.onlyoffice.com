# changeVersionHistory

> FileIntegerArrayWrapper changeVersionHistory(fileId, ChangeHistory)

`PUT /api/2.0/files/file/{fileId}/history`

Change version history

Closes or reopens a revision group in the version history of a file and answers with every stored version of that file, newest first. With `continueVersion=false` the named version is completed: its content is stored again as a fresh version that opens a new revision group, so the editing that follows no longer extends the previous one. With `continueVersion=true` the last revision group is folded back into the group before it, so the next save continues that revision instead of becoming a version of its own; a file that has only one group is left as it is. A `version` of 0 means the current version. The caller needs the right to edit the history of the file, which the room admin, a DocSpace admin acting as room manager and a member with content-creator rights have; plain editing access is refused with 403, as are a guest and a member without access to the room. The call is mutating and not idempotent. A file that is locked, lies in Trash, is open in an editing session or is kept in a connected third-party storage is refused.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose version history is changed. | [required] [example: `1`] |
| **ChangeHistory** | body | [**ChangeHistory**](../../models/change-history.md) | The change to make to the revision group. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The versions of the file after the change | [**FileIntegerArrayWrapper**](../../models/file-integer-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not change the version history of the file | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerArrayWrapper**](../../models/file-integer-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
