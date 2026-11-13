# updateRoomTag

> StringWrapper updateRoomTag(UpdateTagRequestDto)

`PUT /api/2.0/files/tags`

Rename a room tag

Renames a custom room tag of the portal. Every room with this tag then shows the new name. Use the old name exactly as `GET api/2.0/files/tags` returns it. Requires a DocSpace admin. Other callers get 403. A room admin can create tags but also gets 403 here. The call changes data, and a repeated call returns 404. It returns the new name. After the rename, a `tags` filter of `GET api/2.0/files/rooms` with the old name finds no rooms. If no tag has the old name, the call returns 404. The call returns 400 if a name is empty, has only spaces, or is too long. It also returns 400 if any tag already has the new name, even this tag. So you cannot merge two tags.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateTagRequestDto** | body | [**UpdateTagRequestDto**](../models/update-tag-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new name of the renamed tag | [**StringWrapper**](../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `oldName` or `newName`, a name is empty, blank or longer than 255 characters, or a tag with the new name already exists | - | - |
| **403** | Only a portal administrator can rename a tag | - | - |
| **404** | No tag with the old name exists in the catalog | - | - |
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
