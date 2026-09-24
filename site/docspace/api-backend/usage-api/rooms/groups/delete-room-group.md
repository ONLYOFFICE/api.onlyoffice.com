# deleteRoomGroup

> deleteRoomGroup(id, includeMembers)

`DELETE /api/2.0/files/group/{id}`

Delete a room group

Deletes one of the caller's own room groups. Only the collection goes away: the rooms it gathered, their content and the shares on them are left exactly as they were, and a room that was in no other group simply stops being grouped. Deleting a group of another account is refused, and an identifier that names nothing - because it never existed, or because the group has already been deleted - is answered as missing, so repeating the call after a successful delete does not report success a second time. The operation is destructive and cannot be undone: there is no trash for groups, and rebuilding one means calling `POST api/2.0/files/group` again with the same name, icon and rooms, which gives it a new identifier. Nothing is returned in the body. The `includeMembers` parameter is accepted here because the route shares its contract with `GET api/2.0/files/group/{id}`, and has no effect on what is deleted. Read the group first when the rooms it gathers still have to be recorded somewhere.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room group to act on, identified by the value `GET api/2.0/files/group` reports for it. A group of another account cannot be addressed and reads as missing. | [required] [example: `42`] |
| **includeMembers** | query | **Boolean** | Whether the rooms of the group are listed in the answer: true fills the `rooms` array, false leaves it out and reports only how many there are in `totalRooms`. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room group no longer exists; the body is empty and the rooms it gathered are left as they were | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
