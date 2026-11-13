# setRoomLink

> FileShareWrapper setRoomLink(id, RoomLinkRequest)

`PUT /api/2.0/files/rooms/{id}/links`

Set the room external or invitation link

Sets one link of a room and returns it. The call creates, changes, or deletes the link. The `linkType` field selects the type. An invitation link makes each person who opens it a member with `access`. An external link opens the room without an account. Without `linkId`, the call creates a link. With the ID of a link, it changes that link. An unknown ID creates a link with this ID. A change replaces all settings, so send every field to keep. A change keeps the link type. An `access` of `None` deletes the link. Deleting the primary external link of a public or form-filling room creates and returns a new one. After any other deletion, the body is empty. Requires the right to manage the links of the room. Other callers get 403. The call changes data. You can repeat a call with `linkId`, but each call without it creates another link. The `password`, `denyDownload`, and `internal` fields apply only to external links, and `maxUseCount` only to invitation links. Without `linkId`, an `internal` of false gives the portal default. In a public room, external links are never internal. There, a change with `internal` true saves nothing. The call reads a past `expirationDate` of an external link as none. It ignores the date for the primary link of a public or form-filling room. For an invitation link, a past date returns 400. Only custom, public, and form-filling rooms take external links, and a form-filling room only its primary one. A room has at most one invitation link, and a second one returns 403. While an admin restricts external links, the call makes each external link it sets internal. Then, setting an external link in a public room or deleting its primary link returns 403. Deleting the primary link of a form-filling room also returns 403 if that link is not internal. The call also returns 403 for a private room, a room template, or too many links. It also returns 403 for a link type or access level the room does not take. The call returns 400 for a too long title or password, a weak password, or an invalid `maxUseCount` or `expirationDate`. If the room does not exist, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room the link belongs to, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **RoomLinkRequest** | body | [**RoomLinkRequest**](../models/room-link-request.md) | The link to create, change or revoke. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The link as it is after the call, the new primary link that replaced a deleted one, or an empty body after any other deletion | [**FileShareWrapper**](../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `linkType` or `access` is not a known value, the title or password is longer than 255 characters, `maxUseCount` is outside 1-1000 or below the number of times the invitation link was already used, the password does not meet the portal password policy, `expirationDate` lies more than 10 years ahead or, for an invitation link, in the past, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not manage the links of this room, the room is private or a room template, the room does not take this kind of link or this access level, the room already has its invitation link or the link limit is reached, or the admin's restriction on external links forbids the change in a public or form-filling room | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../models/file-share-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room the link belongs to, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
