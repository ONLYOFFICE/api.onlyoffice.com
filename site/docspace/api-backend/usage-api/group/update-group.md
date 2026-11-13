# updateGroup

> GroupWrapper updateGroup(id, UpdateGroupRequest)

`PUT /api/2.0/group/{id}`

Update a group

Changes the name and the manager of a group, and adds or removes members, in one call. Requires a DocSpace admin. Other callers get 403. A room admin can read groups but also gets 403 here. The call changes data. You can repeat it with the same body. A field that you leave out keeps its current value. The call cannot clear the manager through `groupManager`. If `membersToRemove` lists the manager, the group is left without one. It skips a guest, a disabled account, or an unknown ID in `groupManager` and `membersToAdd`. It also skips an ID in `membersToRemove` that is not a member. The call adds members first and then removes them. So an account in both lists ends up removed. The response is the group after the update. Compare it with the request to see what the call skipped. If no group has this ID, the call returns 404. The call returns 400 if `groupName` is too long.  Raises the `group.updated` webhook only when the name, the manager, or the members change, without `user.*` webhooks.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to update, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateGroupRequest** | body | [**UpdateGroupRequest**](../models/update-group-request.md) | The fields to change. Every field is optional and the ones that are left out keep their current values, so an empty object changes nothing. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group as it is after the update | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or `groupName` is longer than 128 characters | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupWrapper**](../models/group-wrapper.md)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
