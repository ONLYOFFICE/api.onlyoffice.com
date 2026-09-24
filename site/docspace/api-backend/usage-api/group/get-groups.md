# getGroups

> GroupArrayWrapper getGroups(userId, manager, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/group`

Get groups

Returns the groups of the portal, one page at a time, with the summary information about each of them - the ID, the name and the manager - but without the member list. The caller needs the permission to read groups. The call is read-only, and the number of groups that match the filters is reported in the total count of the response, so a client can page through them with `count` and `startIndex`. Narrow the result with `filterValue` on the group name, with `userId` to keep only the groups that account belongs to, and with `manager` set to true to keep only the groups it manages; order it with `sortBy` and `sortOrder`, and an unknown `sortBy` falls back to sorting by title. The entries carry no members - read `GET api/2.0/group/{id}` with `includeMembers` for one group, or `GET api/2.0/group/user/{userid}` to find the groups of a single account.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | query | **UUID** (uuid) | Keeps only the groups the account with this ID takes part in. Omit it to search every group of the portal. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **manager** | query | **Boolean** | Narrows `userId` down to the groups that account manages, instead of every group it belongs to. It has no effect on its own and defaults to false. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **sortBy** | query | **String** | What to order the groups by: `Title`, `Manager` or `MembersCount`, compared without regard to case. Any other value, and omitting the field, orders by title. | [optional] [example: `Title`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The text to match against the group name. Omit it to get every group. | [optional] [example: `Marketing`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching groups, with their summary information | [**GroupArrayWrapper**](../models/group-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupArrayWrapper**](../models/group-array-wrapper.md)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
