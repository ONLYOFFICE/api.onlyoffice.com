# setFileCustomFields

> CustomFieldValueArrayWrapper setFileCustomFields(fileId, SetCustomFields)

`PUT /api/2.0/files/metadata/file/{fileId}/customfields`

Set file custom fields

Sets the custom text fields of a file. These are name and value pairs that need no template. Requires editing access to the file. Other callers get 403. The call changes data, and you can repeat it with the same body. The call matches names regardless of case. A listed name gets the value, and a null or empty value removes the field. The call leaves the names that are not listed unchanged. A new name creates the field for the whole portal. When no entry has a value for a name, the portal deletes that field. The text search and the `metadataFilters` of listings find the values. The response is the custom fields of the file after the write. The call returns 400 for an empty list, or a blank or repeated name. It also returns 400 for a name over 255 characters or a value over 8000. It also returns 400 if the file would have more than 50 custom fields. If no file has this ID, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file ID. | [required] [example: `1`] |
| **SetCustomFields** | body | [**SetCustomFields**](../../models/set-custom-fields.md) | The custom fields to set. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The custom fields of the file with their values | [**CustomFieldValueArrayWrapper**](../../models/custom-field-value-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid custom fields or too many of them | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | No file with this identifier exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomFieldValueArrayWrapper**](../../models/custom-field-value-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
