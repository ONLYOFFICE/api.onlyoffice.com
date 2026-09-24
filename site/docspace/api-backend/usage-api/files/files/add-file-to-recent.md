# addFileToRecent

> FileIntegerWrapper addFileToRecent(fileId)

`POST /api/2.0/files/file/{fileId}/recent`

Add a file to Recent

Stamps the file as just used by the calling account and puts it at the top of that account's Recent section, then answers with the file as it stands now. The list is personal: no other member sees the change, and the file itself is untouched. Read access is enough, so a room member with view-only rights and an invited guest may call it, and a visitor who reaches the file through an external link is recorded against that link. A caller without read access is refused with 403, and an identifier that resolves to nothing answers 404. Repeating the call is safe: the file keeps a single entry and only moves back to the top. The section holds the 1000 newest entries of an account and drops the oldest beyond that on its own; folders never enter it, and an encrypted file of a private room is answered normally but never recorded. Read the section back with `GET api/2.0/files/recent` and drop entries with `DELETE api/2.0/files/recent`; whether it is offered among the sections of `GET api/2.0/files/@root` is decided by `PUT api/2.0/files/displayrecent`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fileId** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The file as it stands after the entry was recorded | [**FileIntegerWrapper**](../../models/file-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The calling account cannot read this file | - | - |
| **404** | No file answers to this identifier | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileIntegerWrapper**](../../models/file-integer-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
