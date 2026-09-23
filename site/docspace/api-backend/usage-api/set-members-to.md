# setMembersTo

Referenced types are defined in the [full reference](../people.md).

> GroupWrapper setMembersTo(id, MembersRequest)

`POST /api/2.0/group/{id}/members`

Replace group members

Replaces the whole member list of a group with the accounts given in the request, removing everybody who is not in that list. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. At least one of the listed accounts has to be usable as a group member, otherwise the call is rejected with 400 and the group is left untouched; the accounts that cannot be members - a guest, a disabled account or an ID that matches nobody - are then silently skipped while the rest are applied. The replacement is not atomic: the current members are removed first and the new ones added afterwards, so a failure in between can leave the group empty. The answer is the group with the members it ends up with, which is why it should be read instead of assuming the request was applied verbatim. To add or remove a few accounts without touching the others, use `PUT api/2.0/group/{id}/members` and `DELETE api/2.0/group/{id}/members`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](../people.md#model-membersrequest) | The accounts to add, replace with, or remove. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with the members it ends up with | [**GroupWrapper**](../people.md#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | None of the listed accounts can be a group member | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupWrapper**](../people.md#model-groupwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
