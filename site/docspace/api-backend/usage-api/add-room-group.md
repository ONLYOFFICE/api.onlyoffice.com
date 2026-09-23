# addRoomGroup

Referenced types are defined in the [full reference](../files.md).

> RoomGroupWrapper addRoomGroup(RoomGroupRequestDto)

`POST /api/2.0/files/group`

Add a new room group

Creates a room group, a personal collection that gathers rooms the caller already works with under one name and icon; it belongs to the account that created it and is never shown to other members of the portal. Pass the group name, the identifier of one of the built-in covers offered by `GET api/2.0/files/rooms/covers`, and a list of at least one room - a number for a room stored in the portal, a string for a room on a connected third-party account. Any role may create its own group, a guest included: what is checked is read access to each listed room, not the role of the caller. Repeated identifiers are collapsed, and a value that is not a room identifier at all is rejected as an invalid request. When none of the listed rooms can be read the group is not created; when only some of them can, the group is created with those rooms and the call is still reported as failed, so re-read `GET api/2.0/files/group` before retrying. A room may sit in several groups, and two groups of the same account may carry the same name. The answer is the stored group with its rooms.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomGroupRequestDto** | body | [**RoomGroupRequestDto**](../files.md#model-roomgrouprequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created room group with the rooms that were linked to it | [**RoomGroupWrapper**](../files.md#model-roomgroupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
