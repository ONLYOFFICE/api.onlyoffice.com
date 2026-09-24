# getFilePrimaryExternalLink

> FileShareWrapper getFilePrimaryExternalLink(id, count, startIndex)

`GET /api/2.0/files/file/{id}/link`

Get the file primary external link

Answers with the primary external link of a file - the one the Copy link action of a client hands out - with its address in `sharedTo.shareLink`, its rights in `access`, and its expiration date, password flag and download restriction beside them. The link is created on the first read if the file has none, with read rights, no password and no expiry, so this operation mutates on that first call and is a plain read afterwards; repeated calls answer with the same link identifier. A PDF form in a form-filling room is answered with the link of that room, carried over to the form. The caller needs the right to share the file, which its creator, the room admin and a DocSpace admin acting as room manager have; a caller without access to the file is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is answered with 404 rather than being recreated. The custom links of the same file, the primary one excepted, are listed by `GET api/2.0/files/file/{id}/links`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **count** | query | **Integer** (int32) | How many entries at most to answer with, in the operations of this file that return a list; an operation that answers with a single object is not affected by it. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries of such a list to skip before answering, used together with `count` to walk through it page by page. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the file | [**FileShareWrapper**](../../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not share the file | - | - |
| **404** | The file does not exist, or its primary link was revoked | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../../models/file-share-wrapper.md)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
