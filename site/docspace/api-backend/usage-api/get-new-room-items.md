# getNewRoomItems

Referenced types are defined in the [full reference](../files.md).

> NewItemsFileEntryBaseArrayWrapper getNewRoomItems(id)

`GET /api/2.0/files/rooms/{id}/news`

Get new items in a room

Returns what is new for the calling account in one room, grouped by the day the entry was last changed, with the newest day first and the entries inside a day ordered from the most recent. Only files are reported: a folder somebody else created is not an entry of its own, while a file created inside it is, however deep it lies. What the caller changed is never new for the caller, and a file that was deleted afterwards disappears from the answer. Reading this list leaves the badges alone, which is what makes it the operation to call before `GET api/2.0/files/rooms/{id}`, since opening the room clears them. An empty array therefore means that there is nothing new, not that the badges were already read. The caller needs access to the room; somebody who is not a member is refused, and an unknown or deleted room is answered as missing. Use `GET api/2.0/files/rooms/news` for the same report across every room at once.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new files of the room, grouped by day | [**NewItemsFileEntryBaseArrayWrapper**](../files.md#model-newitemsfileentrybasearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NewItemsFileEntryBaseArrayWrapper**](../files.md#model-newitemsfileentrybasearraywrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
