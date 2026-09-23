# addMembersTo

Referenced types are defined in the [full reference](../people.md).

> GroupWrapper addMembersTo(id, MembersRequest)

`PUT /api/2.0/group/{id}/members`

Add group members

Adds the listed accounts to a group, keeping the members it already has. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. Accounts that cannot be group members - a guest, a disabled account or an ID that matches nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was sent to see what was actually applied. The call is idempotent for an account that is already a member, and it does not change who manages the group; use `PUT api/2.0/group/{id}/manager` for that. The answer is the group with its members after the addition. To replace the whole list instead of extending it, use `POST api/2.0/group/{id}/members`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](../people.md#model-membersrequest) | The accounts to add, replace with, or remove. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with its members after the addition | [**GroupWrapper**](../people.md#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
