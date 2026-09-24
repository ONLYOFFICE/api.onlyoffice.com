# checkConversionStatus

> ConversationResultArrayWrapper checkConversionStatus(fileId, start)

`GET /api/2.0/files/file/{fileId}/checkconversion`

Get conversion status

Reports how far the conversion of a file has got, as a list that holds one entry while the portal still knows about that conversion and nothing once it is over. Read `progress`, which counts from 0 to 100, `error` for the reason a conversion failed, and `file`, which carries the converted file as soon as it exists. Queue the conversion with `PUT api/2.0/files/file/{fileId}/checkconversion` and poll this operation until the entry reaches 100 or disappears: a finished entry is handed out once and then dropped, and an entry whose conversion stopped is discarded a few minutes later, so an empty list means either already reported or never started rather than an error. The same empty list is the answer for an identifier no file matches. Passing `start=true` starts the conversion as well, with the format from the portal settings and no password, which makes that one flag mutating; without it the operation is read-only. The caller needs read access to the file, and anyone else is refused.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file whose conversion is asked about. | [required] [example: `1`] |
| **start** | query | **Boolean** | Whether to start the conversion as well: `true` queues it with the default output format and no password, `false` only reports what the portal already knows. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The conversion entry of the file, or an empty list when the portal has none | [**ConversationResultArrayWrapper**](../../models/conversation-result-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ConversationResultArrayWrapper**](../../models/conversation-result-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
