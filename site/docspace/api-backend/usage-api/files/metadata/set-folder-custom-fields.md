# setFolderCustomFields

> CustomFieldValueArrayWrapper setFolderCustomFields(folderId, SetCustomFields)

`PUT /api/2.0/files/metadata/folder/{folderId}/customfields`

Set folder custom fields

Sets the custom text fields of a folder or a room: free-form name and value pairs that need no template. The caller needs the right to edit the folder; for a room that is its manager. A field is addressed by its name regardless of case: a listed name gets the value, a null or empty value removes the field, the names not listed are left alone. A name the portal has not seen yet creates the field for the whole portal, and a name no entry holds a value for any more is dropped. A name is at most 255 characters, a value at most 8000, a name may be listed once and a folder holds at most 50 custom fields. The custom fields never cascade to the content of the folder. The write finishes in the request; the values take part in the free text search and in the `metadataFilters` of the listings. The answer is the custom fields of the folder after the write. An empty list, a blank, repeated or over-long name, an over-long value or more than 50 fields is answered with 400; a folder the caller cannot edit with 403; a folder that does not exist with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder ID. | [required] [example: `1`] |
| **SetCustomFields** | body | [**SetCustomFields**](../../models/set-custom-fields.md) | The custom fields to set. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The custom fields of the folder with their values | [**CustomFieldValueArrayWrapper**](../../models/custom-field-value-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Invalid custom fields or too many of them | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | Folder not found | - | - |
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
