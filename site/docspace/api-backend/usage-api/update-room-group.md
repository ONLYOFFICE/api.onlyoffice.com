# updateRoomGroup

Referenced types are defined in the [full reference](../files.md).

> RoomGroupWrapper updateRoomGroup(id, UpdateRoomGroupRequest)

`PUT /api/2.0/files/group/{id}`

Update room group

Applies changes to one of the caller's own room groups: a new name, rooms to attach, rooms to detach, or any combination of the three in a single call. A body that carries none of the three (`{}`) is accepted and changes nothing, while a body that names them and leaves every one of them empty asks for an update that cannot be performed and is rejected as an invalid request. `roomsToAdd` is resolved the way creation resolves its list: every identifier has to name a room the caller can read, repeats and rooms already in the group are collapsed, and when only part of the list resolves the rest is still attached and the call is reported as failed. `roomsToRemove` works the other way round - a room already in the group is always detached, even when the caller has since lost access to it, whereas an identifier that is not in the group is resolved first and refused when it names nothing. The steps are applied in order and are not rolled back when a later one fails. A group of another account is answered as missing. The answer is the group as stored after the call.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to change, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **UpdateRoomGroupRequest** | body | [**UpdateRoomGroupRequest**](../files.md#model-updateroomgrouprequest) | The changes to apply. Carrying none of them leaves the group as it is, and each of them may be sent on its own or together with the others. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group as stored after the change | [**RoomGroupWrapper**](../files.md#model-roomgroupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomGroupWrapper**](../files.md#model-roomgroupwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## RoomsPrivacyRoomApi
