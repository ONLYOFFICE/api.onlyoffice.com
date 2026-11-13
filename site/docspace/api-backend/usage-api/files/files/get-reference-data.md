# getReferenceData

> FileReferenceWrapper getReferenceData(GetReferenceDataDto)

`POST /api/2.0/files/file/referencedata`

Resolve a spreadsheet reference

Resolves a reference from a formula in one spreadsheet to another document. It returns the data that the document service needs to read that document. The data has the title, download URL, file type, document key, editor link, and signature token. First, the call looks up `fileKey` as a file id in the portal that `instanceId` names. Then, it looks for `path` among the files in the folder of `sourceFileId`. Then, it reads the file id from `link`, including short links. The first match wins. The call does not resolve a link outside this portal and returns it as the URL. Requires read access to the referenced file. Other callers get 403. For a `path` lookup, the call also checks read access to the source file and its folder. It also returns 403 for an encrypted file or a file in a private room. The call is read-only. If nothing resolves, the call returns 200 with `error` set and the other fields empty. So read `error` before you use other fields. The call returns 400 if the body has no `fileKey` or `instanceId`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **GetReferenceDataDto** | body | [**GetReferenceDataDto**](../../models/get-reference-data-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The reference descriptor, or the same object with the error text set when nothing resolved | [**FileReferenceWrapper**](../../models/file-reference-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `fileKey` or `instanceId` | - | - |
| **403** | The caller cannot read the source file, its folder or the referenced file | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileReferenceWrapper**](../../models/file-reference-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
