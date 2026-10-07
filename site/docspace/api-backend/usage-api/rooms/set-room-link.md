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
| **400** | The request body cannot be read, `linkType` or `access` is not a known value, the title or password is longer than 255 characters, `maxUseCount` is outside 1-1000 or below the number of times the invitation link was already used, the password does not meet the portal password policy, `expirationDate` lies more than 10 years ahead or, for an invitation link, in the past, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not manage the links of this room, the access level is not available for this kind of link in this room, the room already has its invitation link or the link limit is reached, or the admin's restriction on external links forbids the change | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **500** | `linkType` is `Invitation` and `linkId` is the id of the room owner's account, or a third-party identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
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
