# setGroupManager

Referenced types are defined in the [full reference](../people.md).

> GroupWrapper setGroupManager(id, SetManagerRequest)

`PUT /api/2.0/group/{id}/manager`

Set a group manager

Makes an account the manager of a group, replacing whoever managed it before. The caller needs the permissions to edit groups and to add and remove users. Both the group and the account have to exist: the operation answers 404 when the ID in the route matches no live group and also when `userId` matches no account, so the message of the error says which of the two was not found. The account is added to the group at the same time, so a manager does not have to be a member beforehand, and the previous manager stays in the group as an ordinary member. A group has one manager, which makes the call idempotent when it names the account that manages it already. The answer is the group with its new manager. To change the members rather than the manager, use `PUT api/2.0/group/{id}/members`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose manager is set, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **SetManagerRequest** | body | [**SetManagerRequest**](../people.md#model-setmanagerrequest) | The account to make the manager of the group. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with its new manager | [**GroupWrapper**](../people.md#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID, or no account has the specified userId | - | - |
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
