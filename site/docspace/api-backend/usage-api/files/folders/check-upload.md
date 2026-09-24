# checkUpload

> STRINGArrayWrapper checkUpload(folderId, CheckUploadRequest)

`POST /api/2.0/files/{folderId}/upload/check`

Check for upload conflicts

Reports which of the submitted titles already belong to a file in the folder, so an upload can decide in advance whether to overwrite or to ask for another name. Only the clashing titles come back, unordered and without repetitions, and an empty array means every name is free. Matching is by title and ignores case, so a name that differs only in capitalisation is still reported; an existing file that is encrypted is left out, because an upload cannot take it over. The call changes nothing. It needs the same right as the upload itself, the right to add content to the folder, which room managers and content creators have and readers, editors and guests do not; an archived room, a section root and a folder the caller cannot write to are all refused, while an unknown folder is answered as missing. A request without `filesTitle` is rejected as an invalid request, an empty list is accepted and answers with an empty array.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **folderId** | path | **Integer** (int32) | The folder whose contents the names are tested against; take the id from a listing such as `GET api/2.0/files/@root`. | [required] [example: `1`] |
| **CheckUploadRequest** | body | [**CheckUploadRequest**](../../models/check-upload-request.md) | The names to test against the files the folder already holds. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The submitted titles that already belong to a file in the folder | [**STRINGArrayWrapper**](../../models/string-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**STRINGArrayWrapper**](../../models/string-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
