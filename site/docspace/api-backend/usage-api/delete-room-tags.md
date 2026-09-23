# deleteRoomTags

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper deleteRoomTags(id, BatchTagsRequestDto)

`DELETE /api/2.0/files/rooms/{id}/tags`

Detach tags from a room

Detaches the named tags from a room and returns the room with its remaining tag set. Only the link between the room and the tag is removed: the tag stays in the portal catalogue and keeps working for every other room, and `DELETE api/2.0/files/tags` is what removes it from the portal itself. Names that are not in the catalogue, or not attached to this room, are skipped without an error, so a successful answer does not prove that anything was detached; compare the returned tag set instead. An empty list is accepted and does nothing, while a null entry in the list is rejected as an invalid request. The caller must be a manager of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag that loses its last room stays in the catalogue, and only deleting that room takes the tag with it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room whose tags are changed, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **BatchTagsRequestDto** | body | [**BatchTagsRequestDto**](../files.md#model-batchtagsrequestdto) | The names to attach or to detach. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with its tag set after the change | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit this room, or the room is archived | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
