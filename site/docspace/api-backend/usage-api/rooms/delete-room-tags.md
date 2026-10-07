# deleteRoomTags

> FolderWrapper deleteRoomTags(id, BatchTagsRequestDto)

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
| **200** | The room with its tag set after the change | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `names`, a name is null, blank or longer than 255 characters, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not edit this room, or the room is archived | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **500** | A third-party identifier carries a storage account number beyond the 32-bit range | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room whose tags are changed, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
