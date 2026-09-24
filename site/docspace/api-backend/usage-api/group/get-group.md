# getGroup

> GroupWrapper getGroup(id, includeMembers)

`GET /api/2.0/group/{id}`

Get a group

Returns one group by its ID, with its name, its manager and - when asked for - the accounts that belong to it. The caller needs the permission to read groups, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. The call is read-only, and the member list is left out unless `includeMembers` is set to true, so ask for it only when the members are actually needed. Use `GET api/2.0/group` to look a group up by name or to page through them all.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to read, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **includeMembers** | query | **Boolean** | Whether to fill in the member list of the group. It defaults to true, so set it to false when only the name and the manager are needed and the group may be large. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group, with its members when includeMembers was set | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupWrapper**](../models/group-wrapper.md)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
