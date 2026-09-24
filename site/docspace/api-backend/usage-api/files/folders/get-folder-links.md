# getFolderLinks

> FileShareArrayWrapper getFolderLinks(id)

`GET /api/2.0/files/folder/{id}/links`

Get folder external links

Lists the external links of a folder or a room, each with its identifier, title, address, rights, expiration date, password flag and download restriction, the primary link among them once it exists. At most the first hundred links are answered and the number returned is reported in the response headers; there are no paging parameters here. A folder that has never been shared by link answers with an empty list, and so does a member who may read the folder but not manage its links - the empty answer therefore means nothing to show you rather than no links exist. A member without access to the room is refused, an anonymous caller is rejected, and a folder that does not exist is answered as not found. The call is read-only. Take an identifier from here to `PUT api/2.0/files/folder/{id}/links` to change or remove that link, and read the primary one alone with `GET api/2.0/files/folder/{id}/link`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The folder or room whose external links are listed. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The external links of the folder the caller may manage | [**FileShareArrayWrapper**](../../models/file-share-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
