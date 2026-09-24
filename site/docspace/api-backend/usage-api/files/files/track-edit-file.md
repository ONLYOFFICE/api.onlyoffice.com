# trackEditFile

> ItemKeyValuePairBooleanStringWrapper trackEditFile(fileId, tabId, docKeyForTrack, isFinish)

`GET /api/2.0/files/file/{fileId}/trackeditfile`

Track an editing session

Keeps an editing session on the file alive, or ends it; an editor client calls it repeatedly while a document is open. `docKeyForTrack` has to be the document key of the file as it currently stands, the value `POST api/2.0/files/file/{fileId}/startedit` returned, and a key matching neither the current revision nor the one being edited is refused with 403. `tabId` names the client tab that holds the session, so several tabs and several users are tracked on one file independently. Refreshing an entry requires one of the editing rights on the file - editing, reviewing, commenting, filling or filter editing - so a reader is refused. With `isFinish=false` the entry is refreshed and the file stays marked as being edited; with `isFinish=true` the entry for that tab is dropped and the other clients are told that editing has stopped. The call changes the tracking state and never the document, and repeating it is safe. It answers `key` true with an empty `value` whenever it succeeds, so a failure arrives as an error rather than as a false key. An anonymous caller is accepted only through an external share link.

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
| **403** | The document key does not match the revision being edited | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ItemKeyValuePairBooleanStringWrapper**](../../models/item-key-value-pair-boolean-string-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
