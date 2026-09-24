# updateGroup

> GroupWrapper updateGroup(id, UpdateGroupRequest)

`PUT /api/2.0/group/{id}`

Update a group

Changes the name and the manager of a group and adds or removes members, in one call. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. Every field is optional and the ones that are left out are kept: omitting `groupName` keeps the current name, and omitting `groupManager` keeps the current manager rather than clearing it. Accounts in `membersToAdd` that cannot be group members - a guest, a disabled account or an ID that matches nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was sent to see what was actually applied. Members are added first and removed afterwards, an account listed in both lists therefore ends up removed, and removing an account that is not a member changes nothing. The change raises a `GroupUpdated` webhook, and the answer holds the group as it is after the update.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to update, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateGroupRequest** | body | [**UpdateGroupRequest**](../models/update-group-request.md) | The fields to change. Every field is optional and the ones that are left out keep their current values, so an empty object changes nothing. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group as it is after the update | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: application/json
- **Accept**: application/json
