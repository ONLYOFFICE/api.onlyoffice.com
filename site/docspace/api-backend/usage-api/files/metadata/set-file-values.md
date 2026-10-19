# setFileValues

> EntryMetadataWrapper setFileValues(fileId, SetMetadataValues)

`PUT /api/2.0/files/metadata/file/{fileId}/values`

Set file metadata values

Writes the values of metadata fields on a file. The caller needs the right to edit the file: a member with editing access, or an anonymous caller through an external link that grants editing, with the link key in the `Request-Token` header or in the `share` query parameter; a link that grants viewing, commenting, reviewing or form filling only is refused. Every field must belong to a template the file carries, assigned with `PUT api/2.0/files/metadata/file/{fileId}/templates` or inherited from a cascading folder, and a field may be listed once. A value carries exactly the member of its type: `stringValue` for a text field of at most 8000 characters, `numberValue` for a number, `dateValue` for a date, `optionIds` for a choice field, a single option for a single choice; an empty value clears the field. A date without a time zone offset is read as UTC. The write finishes in the request, the file is re-indexed for the metadata filters at once. The custom text fields are not written here: use `PUT api/2.0/files/metadata/file/{fileId}/customFields`. The answer is the whole metadata of the file after the write, the same shape `GET api/2.0/files/metadata/file/{fileId}` returns. A value of the wrong type, a field of a template the file does not carry, a field listed twice or a custom field is answered with 400; a request with neither a session nor a link key with 401; a file the caller cannot edit with 403; a file or a field that does not exist with 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file ID. | [required] [example: `1`] |
| **SetMetadataValues** | body | [**SetMetadataValues**](../../models/set-metadata-values.md) | The parameters for setting values. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The metadata of the file after the write: the assigned templates with the values of their fields, and the custom fields | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A value does not match the field type, a field is listed twice or is a custom field, or the field belongs to a template the file does not have | - | - |
| **401** | The caller has neither a session nor an external link key | - | - |
| **403** | You don't have enough permission to perform the operation | - | - |
| **404** | The file or a field does not exist | - | - |
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
