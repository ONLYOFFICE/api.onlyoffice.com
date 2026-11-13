# convertFile

> FileWrapper convertFile(ConvertFileRequestDto)

`POST /api/2.0/docs/converter`

Convert a file

Converts a portal file to another format and saves the result as a new file. Requires read access to a file that allows copying and the right to create files in the folder. Other callers get 403. It also returns 403 if the file or folder is in a private room or a room with a watermark. Without `folderId`, the portal saves the result in the My documents section of the caller. A guest has no such section, so a guest without `folderId` gets 400. A plain conversion needs only `outputtype`. The call passes the other fields to the document service. The call changes data, keeps the source, and returns the new file. Each repeated call adds another file with a free name. In a room, the portal notifies the room members about each new file. The call returns only after the conversion ends. So a large file keeps the request open. The call accepts only files stored in the portal itself. To convert a file while you copy it to another folder, including a third-party one, use `POST api/2.0/files/file/{fileId}/copyas`. To convert a file to the editable format of the portal next to the source, use `PUT api/2.0/files/file/{fileId}/checkconversion`. The call returns 400 for a missing or unsupported `outputtype`. It also returns 400 for a wrong or missing `password`, or a file too large to convert. Repeating such a request does not help. The call returns 404 for an unknown file or folder. It returns 403 and 404 before the conversion starts. The call returns 402 if the result exceeds the storage quota of the portal, the room, or the caller. If the document service fails the conversion, the call returns 502. The service may be down, or the file may be damaged. A retry helps only in the first case.  Raises the `file.created` webhook.

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
