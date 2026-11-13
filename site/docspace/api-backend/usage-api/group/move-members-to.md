# moveMembersTo

> GroupWrapper moveMembersTo(fromId, toId)

`PUT /api/2.0/group/{fromId}/members/{toId}`

Move group members

Moves the members of one group to another group. The source group stays, without these members. Requires a DocSpace admin. Other callers get 403. A room admin can read groups but also gets 403 here. The call changes data, and you can repeat it. If both IDs are the same, the call changes nothing. The destination group keeps its manager. If the manager of the source group leaves it, the source group has no manager after the call. The call skips disabled members, so they stay in the source group. A guest member leaves the source group but does not join the destination. The response is the destination group with its members. If no group has one of the IDs, the call returns 404. To move only some members, use `PUT api/2.0/group/{id}/members` and `DELETE api/2.0/group/{id}/members`. To delete the source group, use `DELETE api/2.0/group/{id}`.  Raises the `group.updated` webhook for the source group if the two IDs differ and the source has enabled members. Raises the `group.updated` webhook for the destination group only when its members change, without `user.*` webhooks.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fromId** | path | **UUID** (uuid) | The ID of the group the members are taken from. It is emptied but not deleted, and it has to be a group that has not been deleted already. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **toId** | path | **UUID** (uuid) | The ID of the group the members are moved into. It is the group the answer describes, and it has to be a group that has not been deleted already. | [required] [example: `11111111-1111-1111-1111-111111111111`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The destination group with its members | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has one of the specified IDs | - | - |
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
