# deleteRoomTags

> FolderIntegerWrapper deleteRoomTags(id, BatchTagsRequestDto)

`DELETE /api/2.0/files/rooms/{id}/tags`

Detach tags from a room

Detaches the named tags from a room and returns the room with its remaining tag set. Only the link between the room and the tag is removed: the tag stays in the portal catalogue and keeps working for every other room, and `DELETE api/2.0/files/tags` is what removes it from the portal itself. Names that are not in the catalogue, or not attached to this room, are skipped without an error, so a successful answer does not prove that anything was detached; compare the returned tag set instead. An empty list is accepted and does nothing, while a null entry in the list is rejected as an invalid request. The caller must be a manager of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag that loses its last room stays in the catalogue, and only deleting that room takes the tag with it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **BatchTagsRequestDto** | body | [**BatchTagsRequestDto**](../models/batch-tags-request-dto.md) | The names to attach or to detach. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with its tag set after the change | [**FolderIntegerWrapper**](../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit this room, or the room is archived | - | - |
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
