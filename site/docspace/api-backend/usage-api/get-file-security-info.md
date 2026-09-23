# getFileSecurityInfo

Referenced types are defined in the [full reference](../files.md).

> FileShareArrayWrapper getFileSecurityInfo(id, count, startIndex)

`GET /api/2.0/files/file/{id}/share`

Get file sharing rights

Lists the accounts and groups that hold rights on one file, one entry per subject, with the level each of them has, whether the caller may still change that level, and which of them owns the file. The owner comes first, then room managers, groups, ordinary members, guests, and last the accounts that have not accepted their invitation yet, each of those ranked by access level and by name. External links are left out and are listed by `GET api/2.0/files/file/{id}/links` instead, while a PDF form kept in a form-filling room also reports the link of that room, because the form is filled out through it. `startIndex` and `count` page through the subjects, and their total number is reported in the response headers rather than in the body. Listing takes the right to change the sharing of the file, which its creator, the manager of its room and a portal administrator acting as room manager have, while inside a public room reading the file is enough; a member who may read but not share is answered with an empty list although the header still counts the subjects, and a caller with no access, a guest included, is refused. A file that does not exist, or was deleted permanently, is answered as missing. The call is read-only; for several entries at once use `POST api/2.0/files/share`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The file the operation addresses. Take the identifier from a listing such as `GET api/2.0/files/{folderId}`: a file stored on the portal is numbered, while a file in a connected third-party account is named by an opaque string. | [required] [example: `10`] |
| **count** | query | **Integer** (int32) | How many entries at most to answer with, in the operations of this file that return a list; an operation that answers with a single object is not affected by it. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | How many entries of such a list to skip before answering, used together with `count` to walk through it page by page. | [optional] [example: `0`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts and groups that hold rights on the file, the owner first | [**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareArrayWrapper**](../files.md#model-filesharearraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
