# checkConversionStatus

> ConversationResultArrayWrapper checkConversionStatus(fileId, start)

`GET /api/2.0/files/file/{fileId}/checkconversion`

Get conversion status

Returns the conversion status of a file as a list with one entry or none. With `start=true`, the call also starts the conversion with the format from the portal settings and no password. Requires read access to the file. Other callers get 403. With `start=true`, the call also requires the right to convert, which a room manager and a content creator have. Without `start`, the call is read-only. With `start=true`, it queues work. This is the call to poll after `PUT api/2.0/files/file/{fileId}/checkconversion`. Repeat it until `progress` is 100 or the list is empty. Read the converted file from `file` and the reason of a failure from `error`. The call returns a finished entry once and then deletes it. It deletes the entry of a stopped conversion a few minutes later. So an empty list means the result was already returned, the conversion never started, or no file has this id. If `fileId` is neither a number nor the id of a third-party file, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose conversion is asked about. | [required] [example: `1`] |
| **start** | query | **Boolean** | Whether to start the conversion as well: `true` queues it with the default output format and no password, `false` only reports what the portal already knows. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The conversion entry of the file, or an empty list when the portal has none | [**ConversationResultArrayWrapper**](../../models/conversation-result-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller cannot read the file, or, with `start=true`, may not convert it | - | - |
| **404** | The file id is neither a number nor the id of a file in a known third-party storage | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConversationResultArrayWrapper**](../../models/conversation-result-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file whose conversion is asked about. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
