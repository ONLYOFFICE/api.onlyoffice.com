# changeRoomCover

> FolderIntegerWrapper changeRoomCover(id, CoverRequestDto)

`POST /api/2.0/files/rooms/{id}/cover`

Change the room cover

Sets the cover picture and the background colour a room is shown with, and returns the whole room afterwards. `cover` accepts only an identifier listed by `GET api/2.0/files/rooms/covers`, and `color` only six hexadecimal digits with no leading number sign, so anything else is rejected as an invalid request. Either field may be sent on its own, an empty `cover` clears the picture, an empty `color` restores the default one, and an empty body leaves the room untouched. The cover is what the room shows while it has no uploaded logo: setting a logo with `POST api/2.0/files/rooms/{id}/logo` hides the cover without erasing it, and deleting that logo brings it back. The caller must be a manager of the room, an archived room is refused with 403, and an unknown or deleted room is answered with 404. Repeating the same request is harmless, and the cover survives archiving and unarchiving.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to change, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **CoverRequestDto** | body | [**CoverRequestDto**](../models/cover-request-dto.md) | The cover and the colour to apply. Either half may be sent on its own, and an empty object leaves the room as it is. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room as it is after the cover change | [**FolderIntegerWrapper**](../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit this room, or the room is archived | - | - |
| **404** | No room with this ID is visible to the caller | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../models/folder-integer-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
