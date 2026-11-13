# setFolderValues

> EntryMetadataWrapper setFolderValues(folderId, SetMetadataValues)

`PUT /api/2.0/files/metadata/folder/{folderId}/values`

Set folder metadata values

Writes the values of metadata fields on a folder or a room. Requires the right to create content in the folder, or a room manager for a room itself. Other callers get 403. The root folders of sections also return 403. The call changes data, and you can repeat it with the same body. Each field must belong to a template of the folder, assigned with `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited. Fill only the member for the field type: `stringValue`, `numberValue`, `dateValue`, or `optionIds`. A text value has at most 8000 characters. A single-choice field takes one option. An empty value clears the field. The call writes on the folder only. To pass the new values down, run the cascade again with `Overwrite`. To set the custom text fields, use `PUT api/2.0/files/metadata/folder/{folderId}/customFields`. The response is the whole metadata of the folder. The call returns 400 if a value does not fit the field type or limits. It also returns 400 for a field listed twice, a custom field, or a field of another template. If any value is invalid, the call writes nothing. If the folder or a field does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder ID. | [required] [example: `1`] |
| **SetMetadataValues** | body | [**SetMetadataValues**](../../models/set-metadata-values.md) | The parameters for setting values. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The metadata of the folder after the write: the assigned templates with the values of their fields, and the custom fields | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A value does not match the field type or exceeds the number limit, a field is listed twice or is a custom field, or the field belongs to a template the folder does not have | - | - |
| **403** | The caller cannot create in the folder, or is not the manager of the room | - | - |
| **404** | The folder or a field does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
