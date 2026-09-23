# changeRoomGroupIcon

Referenced types are defined in the [full reference](../files.md).

> RoomGroupWrapper changeRoomGroupIcon(id, IconRequest)

`POST /api/2.0/files/group/{id}/icon`

Change room group icon

Replaces the icon of one of the caller's own room groups and returns the whole group, its name and its rooms left as they were. Send the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`; an empty string strips the icon, after which the group comes back with an empty `icon`, and any other value - including a word that merely reads like one, such as `none` - is rejected as an invalid request. An uploaded image cannot be used here, unlike the logo of a room. Leaving `icon` out of the body or sending it as null is accepted and changes nothing, whereas a request that carries no body at all, or a body that is not JSON, is refused. Setting the icon the group already has is accepted as well, so retrying the call is safe. Any role may re-icon its own group, and a group belonging to another account is answered as missing rather than refused, exactly as reading it would be.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to re-icon, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **IconRequest** | body | [**IconRequest**](../files.md#model-iconrequest) | The icon to give the group. A body that leaves the icon out is accepted and changes nothing. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group with the new icon | [**RoomGroupWrapper**](../files.md#model-roomgroupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
