# setGroupManager

> GroupWrapper setGroupManager(id, SetManagerRequest)

`PUT /api/2.0/group/{id}/manager`

Set a group manager

Makes an account the manager of a group and replaces the previous manager. The account also becomes a member. The previous manager stays a member. Requires a DocSpace admin. Other callers get 403. A room admin can read groups but also gets 403 here. The call changes data. You can repeat it with the same body. If the account is a guest or disabled, the call changes nothing. The response is the group with its manager. The call returns 404 if no group has this ID or no account has `userId`. It also returns 400 if `userId` is missing. To change the members, use `PUT api/2.0/group/{id}/members`.  Raises the `group.updated` webhook only when the manager or the members change, without `user.*` webhooks for them.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose manager is set, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **SetManagerRequest** | body | [**SetManagerRequest**](../models/set-manager-request.md) | The account to make the manager of the group. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with its new manager | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `userId` | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID, or no account has the specified userId | - | - |
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
