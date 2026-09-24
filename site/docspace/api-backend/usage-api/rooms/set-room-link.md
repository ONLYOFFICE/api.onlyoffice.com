# setRoomLink

> FileShareWrapper setRoomLink(id, RoomLinkRequest)

`PUT /api/2.0/files/rooms/{id}/links`

Set the room external or invitation link

Creates, updates or deletes one sharing link of a room and returns it. `linkType` chooses the kind: an invitation link makes whoever opens it a member with the given access level, while an external link opens the room without an account. Omitting `linkId` creates a link, passing the id of an existing one updates it, and an unknown id is created with that id; the kind of an existing link cannot be changed afterwards. An access level of 0 deletes the link, and deleting the primary external link of a public or form filling room immediately replaces it with a fresh one, so such a room is never left without one. A room keeps at most one invitation link, and a second one is refused; form filling rooms take no invitation links, and collaboration, form filling and virtual data rooms take no external links. An expiration date in the past is dropped silently for an external link and rejected for an invitation link. `password`, `denyDownload` and `internal` apply to external links only.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room the link belongs to, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **RoomLinkRequest** | body | [**RoomLinkRequest**](../models/room-link-request.md) | The link to create, change or revoke. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The link as it is after the change, or an empty body when nothing was created | [**FileShareWrapper**](../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../models/file-share-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
