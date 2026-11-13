# setFileValues

> EntryMetadataWrapper setFileValues(fileId, SetMetadataValues)

`PUT /api/2.0/files/metadata/file/{fileId}/values`

Set file metadata values

Writes the values of metadata fields on a file. Requires editing access to the file. Other callers get 403. An anonymous caller can use an external link that grants editing. Pass the link key in the `Request-Token` header or the `share` query parameter. A link for viewing, commenting, reviewing, or form filling gets 403. Without a session or a link key, the call returns 401. The call changes data, and you can repeat it with the same body. Each field must belong to a template of the file, assigned with `PUT api/2.0/files/metadata/file/{fileId}/templates` or inherited. Fill only the member for the field type: `stringValue`, `numberValue`, `dateValue`, or `optionIds`. A text value has at most 8000 characters. A single-choice field takes one option. An empty value clears the field. The metadata filters of listings find the new values immediately. To set the custom text fields, use `PUT api/2.0/files/metadata/file/{fileId}/customFields`. The response is the whole metadata of the file, as `GET api/2.0/files/metadata/file/{fileId}` returns it. The call returns 400 if a value does not fit the field type or limits. It also returns 400 for a field listed twice, a custom field, or a field of another template. If any value is invalid, the call writes nothing. If the file or a field does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file ID. | [required] [example: `1`] |
| **SetMetadataValues** | body | [**SetMetadataValues**](../../models/set-metadata-values.md) | The parameters for setting values. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The metadata of the file after the write: the assigned templates with the values of their fields, and the custom fields | [**EntryMetadataWrapper**](../../models/entry-metadata-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A value does not match the field type or exceeds the number limit, a field is listed twice or is a custom field, or the field belongs to a template the file does not have | - | - |
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
