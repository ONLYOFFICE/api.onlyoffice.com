# getGroupsWithFoldersShared

> GroupArrayWrapper getGroupsWithFoldersShared(id, excludeShared, count, startIndex, filterValue)

`GET /api/2.0/group/folder/{id}`

Search groups for a folder

Returns the groups that can be given access to the folder with the ID given in the route, and reports for each of them whether it already has access to that folder. The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches nothing. The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty returns every group instead of nothing, and a value narrows the result by group name. The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the response. Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer when adding new ones; without it every matching group comes back and `shared` tells them apart. To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.

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
| **200** | The matching groups, each with its access state for the folder | [**GroupArrayWrapper**](../../models/group-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No folder has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupArrayWrapper**](../../models/group-array-wrapper.md)

## Authorization

[Basic](../group.md#basic), [OAuth2](../group.md#oauth2) (scopes: read, write), [ApiKeyBearer](../group.md#apikeybearer), [asc_auth_key](../group.md#asc_auth_key), [Bearer](../group.md#bearer), [OpenId](../group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
