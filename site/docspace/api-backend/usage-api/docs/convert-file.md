# convertFile

> FileWrapper convertFile(ConvertFileRequestDto)

`POST /api/2.0/docs/converter`

Convert a file

Converts a portal file into another format and saves the result as a new file, answering with that file. The caller needs read access to a source that may be copied and the right to create files in `folderId`; without `folderId` the result goes to the My documents section of the caller, so a guest, who has none, has to pass it. A file in a private room or in a room with a watermark is not converted, as it would leave the room without its protection, and no result is saved into such a room. `outputtype` is the only parameter a plain conversion needs; the other fields are passed to the document service under its own names, while the source format, name and cache key are taken from the file. The call is mutating and not idempotent: the source is kept, and each call adds another file under a free name. It answers once the conversion is done, so a large file keeps the request open. Only files stored in the portal itself are accepted. To convert while copying into another folder, a third-party one included, use `POST api/2.0/files/file/{fileId}/copyas`; to convert into the portal's own editable format beside the source, use `PUT api/2.0/files/file/{fileId}/checkconversion`. A missing or unsupported `outputtype` is refused with 400, and so is a source the document service rejects: a wrong or missing `password`, or a file too large to convert; retrying the same request will not help. Missing access or a protected room is refused with 403 and an unknown file or folder with 404, both before any conversion starts. A result that does not fit the storage quota of the portal, the room or the caller is refused with 402. A conversion the document service fails is answered with 502: the service may be down or the file damaged; a retry helps only in the first case.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ConvertFileRequestDto** | body | [**ConvertFileRequestDto**](../models/convert-file-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The converted file, as it was saved in the portal | [**FileWrapper**](../models/file-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `outputtype` is missing or the file cannot be converted to it, `folderId` is missing for a caller without My documents, or the document service rejects the source: a wrong or missing password, or a file too large | - | - |
| **402** | The result does not fit the storage quota of the portal, the room or the caller | - | - |
| **403** | You cannot read or copy the file or create files in the folder, the file lies in a private room or in a room with a watermark, or the folder lies in a private room or in a room with a watermark | - | - |
| **404** | The file or the folder does not exist | - | - |
| **502** | The document service is unreachable or failed the conversion without naming the reason; the source may be damaged | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileWrapper**](../models/file-wrapper.md)

## Authorization

[Basic](docs.md#basic), [OAuth2](docs.md#oauth2) (scopes: read, write), [ApiKeyBearer](docs.md#apikeybearer), [asc_auth_key](docs.md#asc_auth_key), [Bearer](docs.md#bearer), [OpenId](docs.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
