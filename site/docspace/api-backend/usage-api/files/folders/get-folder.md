# getFolder

> FormsItemArrayWrapper getFolder(folderId)

`GET /api/2.0/files/{folderId}/formfilter`

Get folder form filter

Lists the fields the completed forms of a form-filling room carry, each of them a key and the kind of value behind it, so that a client can offer them as filters. Feed a pair from this list back as `formsItemKey` and `formsItemType` of `GET api/2.0/files/{folderId}` to keep only the completed forms whose field of that name holds a value. The fields are read from the search index of one of the forms already gathered, so they appear once indexing has caught up with the first submission. Only the Complete folder of a form-filling room carries such fields: for any other folder, for a folder that does not exist and for one that has been deleted the answer is an empty list rather than a refusal, and the same holds while nothing has been submitted yet. The operation reads the index alone, changes nothing and needs no authorization.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder the operation acts on. Take the identifier from a listing such as `GET api/2.0/files/@root` or `GET api/2.0/files/{folderId}`: a folder stored in the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The form fields that can be used as filters, empty when the folder carries none | [**FormsItemArrayWrapper**](../../models/forms-item-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FormsItemArrayWrapper**](../../models/forms-item-array-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
