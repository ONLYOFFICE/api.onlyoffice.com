# getFolderSecurityInfo

> FileShareArrayWrapper getFolderSecurityInfo(id, count, startIndex)

`GET /api/2.0/files/folder/{id}/share`

Get folder sharing rights

Lists the accounts and groups that hold rights on one folder or room, one entry per subject, with the level each of them has, whether the caller may still change that level, and which of them owns the entry. The owner comes first, then room managers, groups, ordinary members, guests, and last the accounts that have not accepted their invitation yet, each of those ranked by access level and by name. External links are left out and are listed by `GET api/2.0/files/folder/{id}/links` instead. `startIndex` and `count` page through the subjects, and their total number is reported in the response headers rather than in the body. For a room, and for a folder inside a public room, read access is enough; any other folder is listed only to a caller who may change its sharing, which the manager of its room and a portal administrator acting as room manager may, and a member who may only read such a folder is answered with an empty list although the header still counts the subjects. A caller with no access, a guest included, is refused, and a folder that does not exist is answered as missing. The call is read-only. For a room prefer `GET api/2.0/files/rooms/{id}/share`, which filters the same subjects by kind and by name.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room the operation addresses. A folder stored on the portal is numbered, while a folder in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **count** | query | **Integer** (int32) | How many entries at most to answer with, in the operations of this folder that return a list; an operation that answers with a single object is not affected by it. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries of such a list to skip before answering, used together with `count` to walk through it page by page. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts and groups that hold rights on the folder, the owner first | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
