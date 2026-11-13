# startFileConversion

> ConversationResultArrayWrapper startFileConversion(fileId, CheckConversionRequestDto)

`PUT /api/2.0/files/file/{fileId}/checkconversion`

Start file conversion

Starts the conversion of a file into an editable format and returns the conversion entry to poll. You can omit the whole body. If `outputType` is empty, the call uses the default format for the type of the file. With `createNewIfExist=true`, the call creates a new file beside the source. With `false`, the default, it replaces the converted file that already exists. With `sync=true`, the call converts within the request and returns the finished result. Use it only for small documents. Requires the right to convert the file, which a room manager and a content creator have. Other callers get 403. Without `sync`, the call queues work. While a queued conversion runs, a repeated call without `sync` queues nothing. Otherwise, each call converts the file again. After this call, repeat `GET api/2.0/files/file/{fileId}/checkconversion` until `progress` is 100. Then read the converted file from `file`. If the format needs no conversion, the call queues nothing and returns the current status. For a file that needs conversion, an `outputType` it cannot convert to returns 400. To save a PDF copy in another folder, use `POST api/2.0/files/file/{id}/saveaspdf`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file to convert. | [required] [example: `1`] |
| **CheckConversionRequestDto** | body | [**CheckConversionRequestDto**](../../models/check-conversion-request-dto.md) | The parameters of the conversion. The whole body may be omitted, in which case the defaults of the portal apply. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The conversion entry to poll, or the finished result when the conversion is synchronous | [**ConversationResultArrayWrapper**](../../models/conversation-result-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `outputType` names a format the portal cannot convert this file to | - | - |
| **403** | The caller may not convert the file | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConversationResultArrayWrapper**](../../models/conversation-result-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The file to convert. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |
| **ThirdPartyCheckConversionRequestDto** | body | [**ThirdPartyCheckConversionRequestDto**](../../models/third-party-check-conversion-request-dto.md) | The parameters of the conversion. The whole body may be omitted, in which case the defaults of the portal apply. | [optional] |


## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
