# setCustomFilterTag

> FileWrapper setCustomFilterTag(fileId, CustomFilterRequest)

`PUT /api/2.0/files/file/{fileId}/customfilter`

Set the Custom Filter editing mode

Turns the Custom Filter mode of a spreadsheet on or off and returns the file. In this mode, the sorting and filters of one user are visible only to that user. With the mode off, all users share the filters again. Turning it on removes other users from the editing session. Requires the right to use the mode, which a room manager has. Other callers get 403, including read-only access. Only the user who turned the mode on, a room manager, or a DocSpace admin can turn it off. Other users get 403. The call changes data, and you can repeat it with the same body. If the format does not support the mode, the call returns 400. If no file has this id, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The spreadsheet whose Custom Filter mode is switched. | [required] [example: `1`] |
| **CustomFilterRequest** | body | [**CustomFilterRequest**](../../models/custom-filter-request.md) | The Custom Filter state to reach. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The spreadsheet with its Custom Filter state as it now stands | [**FileWrapper**](../../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The file is not in a format that supports the Custom Filter mode | - | - |
| **403** | The caller may not use the Custom Filter mode on the file, or somebody else switched the mode on and the caller is neither a room manager nor a DocSpace admin | - | - |
| **404** | The file id resolves to nothing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../../models/file-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **String** | The spreadsheet whose Custom Filter mode is switched. | [required] [example: `sbox-42-L1JlcG9ydC5kb2N4`] |

Return type: [**ThirdPartyFileWrapper**](../../models/third-party-file-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
