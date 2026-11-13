# deleteProfile

> EmployeeFullWrapper deleteProfile()

`DELETE /api/2.0/people/@self`

Close my own profile

Disables the account of the caller at the request of its owner. This is the second step of self-removal. The first step, `PUT api/2.0/people/self/delete`, emails the confirmation link. Sign the request with the confirmation token from that link. The portal owner and an LDAP account get 403. If the account no longer exists, the call returns 401. The call changes data, and a repeated call with the same token returns 401. It sets the `Terminated` status, ends all sessions of the account, and notifies the DocSpace admins. The account then cannot sign in. The call keeps its rooms, files, and group memberships. A DocSpace admin can then delete the account with `DELETE api/2.0/people/{userId}`. Until then, `PUT api/2.0/people/status/{status}` can enable it again. The call returns the profile with the new status.  Raises the `user.updated` webhook and not `user.deleted`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller with the Terminated status | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is the portal owner, an LDAP account or a system account | - | - |
| **401** | The link is invalid or expired, or the calling account no longer exists | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullWrapper**](../../models/employee-full-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
