# deleteMember

> EmployeeFullWrapper deleteMember(userid)

`DELETE /api/2.0/people/{userid}`

Delete a user

Deletes a portal profile and queues the erasure of the data behind it. The account has to be disabled first - set the `Terminated` status through `PUT api/2.0/people/status/{status}`, otherwise the operation answers 403 - and it must not be a system account or one imported from LDAP. The caller needs the permission to add and remove users, and has to be the portal owner to delete a DocSpace administrator. The profile disappears at once, together with its avatar, its group memberships, its file shares and its OAuth clients, while the data it owned is erased by a queued job afterwards, which can be watched through `GET api/2.0/people/remove/progress/{userid}`. The removal is permanent and cannot be undone, so hand the rooms and the shared files over first through `POST api/2.0/people/reassign/start` - an account whose reassignment has not finished cannot be deleted. The call raises a `UserDeleted` webhook and answers with the profile as it was just before it was removed. To delete several accounts at once use `PUT api/2.0/people/delete`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile as it was just before it was deleted | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The account is not disabled, is a system or an LDAP account, or the caller may not delete a DocSpace administrator | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../../models/employee-full-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
