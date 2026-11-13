# getFolder

> FormsItemArrayWrapper getFolder(folderId)

`GET /api/2.0/files/{folderId}/formfilter`

Get folder form filter

Returns the fields of the completed forms in the Complete folder of a form-filling room. Each field has a key and a value type. To filter by a field, pass a pair as `formsItemKey` and `formsItemType` of `GET api/2.0/files/{folderId}`. That call then keeps only the completed forms whose field has a value. Anyone can call it without signing in. The call is read-only. It reads the fields from the search index of one completed form. So the list fills only after the portal indexes the first submitted form. For any other folder, an unknown folder, or a folder without completed forms, the call returns an empty list.

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

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
