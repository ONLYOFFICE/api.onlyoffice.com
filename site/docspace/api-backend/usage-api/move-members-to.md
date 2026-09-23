# moveMembersTo

Referenced types are defined in the [full reference](../people.md).

> GroupWrapper moveMembersTo(fromId, toId)

`PUT /api/2.0/group/{fromId}/members/{toId}`

Move group members

Moves every member of one group into another group, emptying the first one. The caller needs the permissions to edit groups and to add and remove users, and both IDs have to belong to groups that have not been deleted, otherwise the operation answers 404. The source group is kept, only without members, so delete it separately through `DELETE api/2.0/group/{id}` if it is no longer needed. Members that cannot be group members any more are silently skipped rather than failing the call, and an account that already belongs to the destination is simply left there. The answer is the destination group with its members, not the source one. To move a chosen few instead of everybody, use `PUT api/2.0/group/{id}/members` and `DELETE api/2.0/group/{id}/members`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fromId** | path | **UUID** (uuid) | The ID of the group the members are taken from. It is emptied but not deleted, and it has to be a group that has not been deleted already. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **toId** | path | **UUID** (uuid) | The ID of the group the members are moved into. It is the group the answer describes, and it has to be a group that has not been deleted already. | [required] [example: `11111111-1111-1111-1111-111111111111`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The destination group with its members | [**GroupWrapper**](../people.md#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has one of the specified IDs | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupWrapper**](../people.md#model-groupwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
