# setFolderValues

> EntryMetadataWrapper setFolderValues(folderId, SetMetadataValues)

`PUT /api/2.0/files/metadata/folder/{folderId}/values`

Set folder metadata values

Writes the values of metadata fields on a folder or a room. The caller needs the right to create in the folder (a room manager or a content creator); for a room that is its manager. Every field must belong to a template the folder carries, assigned with `PUT api/2.0/files/metadata/folder/{folderId}/templates` or inherited from a cascading folder, and a field may be listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000 characters, `numberValue` for a whole number of at most 2^53-1 in magnitude (the largest integer a JSON client reads exactly), `dateValue` for a date, `optionIds` for a choice field; an empty value clears the field. The write finishes in the request and touches the folder only: to push the new values down a cascading folder run the cascade again with `Overwrite`. The custom text fields are written with `PUT api/2.0/files/metadata/folder/{folderId}/customFields`. The answer is the whole metadata of the folder after the write. A value of the wrong type or beyond the number limit, a field listed twice, a custom field or a field of a template the folder does not carry is answered with 400; a caller without the right to create in the folder with 403; a folder or a field that does not exist with 404.

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
