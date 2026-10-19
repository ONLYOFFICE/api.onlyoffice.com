# updateFileIfExist

> BooleanWrapper updateFileIfExist(SettingsRequestDto)

`PUT /api/2.0/files/updateifexist`

Update a file version if it exists

Reports that uploading a file under a name that already exists does not update the existing file. The operation is a stub kept for compatibility: the request body is read but ignored, nothing is stored, and the answer is always false, so calling it changes no behaviour and repeating it changes nothing. What actually decides the outcome of a name clash is the parameter of the upload itself - see the `createNewIfExist` and conflict-resolution parameters of the operations under `api/2.0/files/{folderId}/upload` and of `PUT api/2.0/files/fileops/copy`. Any authenticated role down to a guest may call it; an unauthenticated caller is refused. Because the value is a constant, there is nothing to read back afterwards, and `GET api/2.0/files/settings` does not publish it. To add a version to a document that is already stored, address the file directly through the update operations under `api/2.0/files/file/{fileId}` instead of uploading under the same name and relying on this setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SettingsRequestDto** | body | [**SettingsRequestDto**](../../models/settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always false: an upload does not update an existing file by name | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
