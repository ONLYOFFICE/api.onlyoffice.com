# updateRoomTag

> StringWrapper updateRoomTag(UpdateTagRequestDto)

`PUT /api/2.0/files/tags`

Rename a room tag

Renames a custom room tag in the portal catalog. The rename follows the tag everywhere it is used: every room that carries it keeps it and shows the new name, so nothing has to be re-attached afterwards. Only a portal administrator may rename a tag, and a room manager who is allowed to create tags is still refused here. The old name is matched exactly as it is stored rather than searched for, and a name that is not in the catalog is answered as missing. A new name that another tag already occupies is rejected as an invalid request, because tag names are unique across the portal; both names must be non-blank and within the published length limit. The answer is the new name. Stored queries are not updated for the caller: a `tags` filter of `GET api/2.0/files/rooms` that still names the old value stops matching anything. The catalog is read with `GET api/2.0/files/tags`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateTagRequestDto** | body | [**UpdateTagRequestDto**](../models/update-tag-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new name of the renamed tag | [**StringWrapper**](../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Only a portal administrator can rename a tag | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../models/string-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
