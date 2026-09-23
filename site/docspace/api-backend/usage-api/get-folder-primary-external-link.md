# getFolderPrimaryExternalLink

Referenced types are defined in the [full reference](../files.md).

> FileShareWrapper getFolderPrimaryExternalLink(id, count, startIndex)

`GET /api/2.0/files/folder/{id}/link`

Get the folder primary external link

Answers with the primary external link of a folder or a room - the one the Copy link action of a client hands out - with its address in `sharedTo.shareLink`, its rights in `access`, and its title, expiration date, password flag and download restriction beside them. The link is created on the first read if the folder has none, with read rights, no password and no expiry, so this operation mutates on that first call and is a plain read afterwards; repeated calls answer with the same link identifier. The caller needs the right to manage the links of the room the folder belongs to, which its manager and a portal administrator acting as room manager have; a member with read access alone is refused with 403 and an anonymous caller is rejected, while a link that was deliberately revoked is answered with 404 rather than being recreated. The paging parameters are accepted for compatibility and leave the single link answered here unchanged. Every external link of the same folder is listed by `GET api/2.0/files/folder/{id}/links`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **count** | query | **Integer** (int32) | How many entries at most to answer with, in the operations of this folder that return a list; an operation that answers with a single object is not affected by it. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries of such a list to skip before answering, used together with `count` to walk through it page by page. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the folder | [**FileShareWrapper**](../files.md#model-filesharewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not manage the links of this folder | - | - |
| **404** | The folder does not exist, or its primary link was revoked | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../files.md#model-filesharewrapper)

## Authorization

[cookieAuth](../files.md#cookieauth), [bearerAuth](../files.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
