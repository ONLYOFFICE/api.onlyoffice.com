# setMembersTo

> GroupWrapper setMembersTo(id, MembersRequest)

`POST /api/2.0/group/{id}/members`

Replace group members

Replaces the members of a group with the listed accounts. Requires a DocSpace admin. Other callers get 403. A room admin can read groups but also gets 403 here. The call changes data. You can repeat it with the same body. First, the call removes the current members, except disabled ones. Then it adds the listed accounts. It skips a guest, a disabled account, or an unknown ID. These two steps are not atomic. So a failure between them can leave the group empty. The response is the group with the members it ends up with. If no group has this ID, the call returns 404. The call returns 400 if the list is missing, empty, or has no account that can be a member. In that case, the group does not change. To add or remove a few accounts, use `PUT api/2.0/group/{id}/members` or `DELETE api/2.0/group/{id}/members`.  Raises the `group.updated` webhook only when the members or the manager change, without `user.*` webhooks for them.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](../models/members-request.md) | The accounts to add, replace with, or remove. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with the members it ends up with | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `members` list, or none of the listed accounts can be a group member | - | - |
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
