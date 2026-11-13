# deleteRoomGroup

> deleteRoomGroup(id, includeMembers)

`DELETE /api/2.0/files/group/{id}`

Delete a room group

Deletes a room group of the caller. The rooms of the group, their content, and their shares stay unchanged. Any signed-in user can call it, including a guest. If the group belongs to another account, the call returns 403, even for a DocSpace admin. The call cannot be undone, and a repeated call returns 404. If the group does not exist, the call returns 404. The response body is empty. The call ignores `includeMembers`. To keep the list of rooms, read the group first with `GET api/2.0/files/group/{id}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **includeMembers** | query | **Boolean** | Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and reports only how many there are in `totalRooms`. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group no longer exists; the body is empty and the rooms it gathered are left as they were | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The group belongs to another account | - | - |
| **404** | The group does not exist | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
