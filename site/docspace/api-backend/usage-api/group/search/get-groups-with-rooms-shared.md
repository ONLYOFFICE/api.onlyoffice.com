# getGroupsWithRoomsShared

> GroupArrayWrapper getGroupsWithRoomsShared(id, excludeShared, count, startIndex, filterValue)

`GET /api/2.0/group/room/{id}`

Search groups for a room

Returns the portal groups for sharing the room. The `shared` field tells whether a group already has access. The list also has the system group Everyone. Requires the right to change access to the room. Other callers get 403. If no room has the ID, the call returns 404. The call is read-only. It sorts the groups by name and pages them by `count` and `startIndex`, with a total count. An empty `filterValue` returns every group. Otherwise, the call keeps the groups whose name contains the value, in any case. With `excludeShared`, the call returns only the groups without access. The call returns 400 if `count` is outside 1 to 100. To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **excludeShared** | query | **Boolean** | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting access. Every returned entry then has `shared` set to false; without the flag every matching group comes back and `shared` tells them apart. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterValue** | query | **String** | The text to match against the group name. Omit it to get every group the caller may grant access to. | [optional] [example: `Marketing`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching groups, each with its access state for the room | [**GroupArrayWrapper**](../../models/group-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or the `count` is outside its allowed range | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No room has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupArrayWrapper**](../../models/group-array-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `sbox-42`] |


## Authorization

[Basic](../group.md#basic), [OAuth2](../group.md#oauth2) (scopes: read, write), [ApiKeyBearer](../group.md#apikeybearer), [asc_auth_key](../group.md#asc_auth_key), [Bearer](../group.md#bearer), [OpenId](../group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
