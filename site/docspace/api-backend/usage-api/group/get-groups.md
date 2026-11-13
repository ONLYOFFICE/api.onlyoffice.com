# getGroups

> GroupArrayWrapper getGroups(userId, manager, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/group`

Get groups

Returns the groups of the portal, one page at a time. Each entry has the ID, the name, and the manager, but no members. Requires a DocSpace admin or a room admin. Other callers get 403. The call is read-only. The response reports the total number of matching groups, so you can page with `count` and `startIndex`. The call matches `filterValue` against any part of the group name and ignores case. With `userId`, it keeps only the groups of that account. With `manager` set to true, it keeps only the groups that account manages. An unknown `sortBy` value orders the groups by title. The call returns 400 if `count` is out of range or a parameter has the wrong type. To read the members of one group, use `GET api/2.0/group/{id}`.

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
| **400** | A parameter has the wrong type, or the `count` is outside its allowed range | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupArrayWrapper**](../models/group-array-wrapper.md)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
