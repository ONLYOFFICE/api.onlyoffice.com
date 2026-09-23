# removeMembersFrom

Referenced types are defined in the [full reference](../people.md).

> GroupWrapper removeMembersFrom(id, MembersRequest)

`DELETE /api/2.0/group/{id}/members`

Remove group members

Removes the listed accounts from a group, leaving the rest of its members in place. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. The accounts themselves are kept; only their membership in this group ends, together with the access they had through it. The call is idempotent and forgiving: an ID that is not a member, and one that matches no account at all, are both skipped without an error, and an empty list simply changes nothing. The answer is the group with the members that remain. Emptying a group cannot be done through `POST api/2.0/group/{id}/members`, which needs at least one valid account, so list every member here, or move them away with `PUT api/2.0/group/{fromId}/members/{toId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](../people.md#model-membersrequest) | The accounts to add, replace with, or remove. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with the members that remain | [**GroupWrapper**](../people.md#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
