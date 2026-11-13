# deleteTemplates

> BooleanWrapper deleteTemplates(DeleteTemplateFilesRequestDto)

`DELETE /api/2.0/files/templates`

Delete template files

Deletes files from the personal template list of the calling account. The files themselves stay unchanged. Any signed-in user can call it, except a guest. A guest gets 403. The call skips files without read access. The call changes data. You can repeat it with the same body. It returns `true` even when it deletes nothing. The body is a bare JSON array of file ids. The call returns 400 if the body is not such an array. To add files to the list, use `POST api/2.0/files/templates`. That call takes an object with `fileIds`, not a bare array.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeleteTemplateFilesRequestDto** | body | **List** | The files to take off the template list, by id; this array is the whole request body. Only a file stored in the portal itself can be a template, which is why an id here is always numeric. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the files named in the array are no longer templates of the caller | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The body is not a JSON array of file ids | - | - |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
