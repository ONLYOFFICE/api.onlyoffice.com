# createRoomTag

> StringWrapper createRoomTag(CreateTagRequestDto)

`POST /api/2.0/files/tags`

Create a room tag

Creates a custom room tag in the portal catalog and returns its name. The tag belongs to the portal, not to the caller. Requires a DocSpace admin or a room admin. Other callers get 403. The call changes data. If a tag with this name exists, the call returns that tag and creates nothing. So you can repeat it with the same body. Use the returned name in the `tags` filter of `GET api/2.0/files/rooms` and in the room tag calls. To attach the tag to a room, use `PUT api/2.0/files/rooms/{id}/tags`. That call also creates a missing tag. To read the catalog, use `GET api/2.0/files/tags`. The call returns 400 if the name is missing, empty, has only spaces, or is too long.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateTagRequestDto** | body | [**CreateTagRequestDto**](../models/create-tag-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The name of the created tag, or of the tag that already carried this name | [**StringWrapper**](../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `name`, or the name is empty, blank or longer than 255 characters | - | - |
| **403** | Only a room manager or a portal administrator can create tags | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../models/string-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
