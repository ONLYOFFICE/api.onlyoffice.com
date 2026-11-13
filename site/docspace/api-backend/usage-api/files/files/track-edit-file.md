# trackEditFile

> ItemKeyValuePairBooleanStringWrapper trackEditFile(fileId, tabId, docKeyForTrack, isFinish)

`GET /api/2.0/files/file/{fileId}/trackeditfile`

Track an editing session

Keeps an editing session on the file alive, or ends it. An editor app calls it repeatedly while a document is open. Pass in `docKeyForTrack` the key that `POST api/2.0/files/file/{fileId}/startedit` returned. If the key matches neither the current revision nor the edited one, the call returns 403. The call tracks each `tabId` separately, so several tabs and users can edit one file. With `isFinish` false, the call refreshes the entry, and the file stays marked as edited. With `isFinish` true, the call deletes the entry of this tab. A refresh requires the right to edit, review, comment, fill forms, or edit filters. Other callers get 403. An anonymous caller needs an external link. Without a link, it gets 401. A refresh through a link that does not allow editing also returns 401. The call changes data of the session, not the document. You can repeat it. On success, `key` is true and `value` is empty. A failure returns an error code, not a false `key`. If the file does not exist, the call returns 404. A refresh of a file that another user locked returns 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose editing session is being tracked. | [required] [example: `1`] |
| **tabId** | query | **UUID** (uuid) | The client tab that holds the session, a value the client makes up once and repeats on every call about that tab. Two tabs sending different values are tracked as two sessions on the same file, while the all-zero value belongs to a session claimed for a single editor. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **docKeyForTrack** | query | **String** | The document key of the revision being edited, as `POST api/2.0/files/file/{fileId}/startedit` returned it. It is checked against the file's current key on every call, so a key left over from an older revision is refused. | [optional] [example: `abc123`] |
| **isFinish** | query | **Boolean** | Ends the session for this tab and tells the other clients that editing has stopped. Left off, the session is refreshed and the file stays marked as being edited. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The session was refreshed or closed | [**ItemKeyValuePairBooleanStringWrapper**](../../models/item-key-value-pair-boolean-string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | An anonymous caller has no external link, or refreshes the session through a link that does not grant editing | - | - |
| **403** | The document key does not match the revision being edited, the caller has none of the editing rights on the file, or the session is refreshed while the file is locked by somebody else | - | - |
| **404** | The file id resolves to nothing | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ItemKeyValuePairBooleanStringWrapper**](../../models/item-key-value-pair-boolean-string-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose editing session is being tracked. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
