# unpinRoom

Referenced types are defined in the [full reference](../files.md).

> FolderIntegerWrapper unpinRoom(id)

`PUT /api/2.0/files/rooms/{id}/unpin`

Unpin a room

Removes a room from the pinned group of the calling account and returns the room with the pinned flag cleared. Only the personal ordering of the caller changes: the room itself, its members, their roles and its contents are left exactly as they were, and the room stays in the list, simply among the unpinned ones. Unpinning frees one of the pin slots of the account, which AI rooms count separately, so it is the way out of a refused `PUT api/2.0/files/rooms/{id}/pin`. Unpinning a room that was never pinned is accepted and changes nothing, so the call can be repeated safely and its answer does not prove that anything was pinned before. Anybody who can read the room may unpin it, while somebody who is not in the room at all is refused and an unknown or deleted room is answered as missing. An archived room cannot be unpinned.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with its pinned flag cleared for the caller | [**FolderIntegerWrapper**](../files.md#model-folderintegerwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
