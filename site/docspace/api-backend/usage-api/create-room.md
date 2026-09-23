# createRoom

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper createRoom(CreateRoomRequestDto)

`POST /api/2.0/files/rooms`

Create a room

Creates a room in the portal Rooms section and returns it. `roomType` decides which sharing links, member roles and form features the room offers, and it cannot be changed afterwards, so a room of the wrong kind has to be recreated. The caller must be the portal owner, a portal administrator or a room administrator; a user or a guest is refused, and so is a public room while the portal forbids external sharing. `title` is required and must not be blank: characters a folder name cannot hold are replaced with underscores and the rest is truncated, so the stored title can differ from the one sent and two rooms can share it. `quota` is accepted only while the per-room quota feature is on and must stay within the portal quota, `cover` only for an id returned by `GET api/2.0/files/rooms/covers`, and `color` as six hexadecimal digits with no leading number sign. Tag names the portal does not know yet are added to the tag catalogue. `share` is not implemented and any non-empty value is rejected, so invite members afterwards with `PUT api/2.0/files/rooms/{id}/share`. Passing the portal room limit ends the call as a billing refusal and creates nothing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateRoomRequestDto** | body | [**CreateRoomRequestDto**](../files.md#model-createroomrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created room with its id, type, settings, logo and tags | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
