# sendEditorNotify

> AceShortArrayWrapper sendEditorNotify(fileId, MentionMessageRequest)

`POST /api/2.0/files/file/{fileId}/sendeditornotify`

Notify mentioned users

Sends an email to the accounts mentioned in a file, with a link to the file. The call skips addresses that belong to no account. Requires the right to comment on the file. Other callers get 403. The call queues emails. Do not repeat it. Each call sends the emails again. It returns one entry per mentioned account, with the access of that account to the file. An account without access is in the list too. To give access, use `PUT api/2.0/files/file/{id}/share`. If sending fails, the call still returns 200. The call is rate-limited. The call returns 400 if `emails` is missing or `message` is too long. If the file does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the mention was made in. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **MentionMessageRequest** | body | [**MentionMessageRequest**](../../models/mention-message-request.md) | The notification to send. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The people who currently have access to the file, when the caller still has to invite someone; empty otherwise | [**AceShortArrayWrapper**](../../models/ace-short-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The address list is missing, or the message is longer than the field allows | - | - |
| **403** | The caller may not comment on the file | - | - |
| **404** | The file does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AceShortArrayWrapper**](../../models/ace-short-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file the mention was made in. A file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
