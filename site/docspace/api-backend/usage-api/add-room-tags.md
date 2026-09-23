# addRoomTags

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper addRoomTags(id, BatchTagsRequestDto)

`PUT /api/2.0/files/rooms/{id}/tags`

Attach tags to a room

Attaches the named tags to a room and returns the room with its whole tag set. Tags are portal-wide labels shared by every room, and a name that the catalogue does not hold yet is created there by this call, so attaching is also the short way of adding a tag to the portal. Names already attached to the room are kept as they are, and repeating the call changes nothing, which makes it safe to retry. An empty list is accepted and does nothing, while a blank or overlong name is rejected as an invalid request. The caller must be a manager of the room or an administrator of the portal, and a room in the Archive section is refused with 403. A tag has no identifier of its own and is addressed by name, so `GET api/2.0/files/tags` is what shows which names already exist. Use `DELETE api/2.0/files/rooms/{id}/tags` to detach them again, which leaves the tags themselves in the catalogue.

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
