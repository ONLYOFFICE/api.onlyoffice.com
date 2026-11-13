# deleteMember

> EmployeeFullWrapper deleteMember(userId)

`DELETE /api/2.0/people/{userId}`

Delete a user

Deletes an account and queues the deletion of its data. First disable the account with the `Terminated` status of `PUT api/2.0/people/status/{status}`. Otherwise the call returns 403. Requires a DocSpace admin. Other callers get 403. Only the portal owner can delete a DocSpace admin. The call also returns 403 for a system account or an LDAP account. If no account has the ID, the call returns 404. The call cannot be undone, and a repeated call returns 404. The account disappears immediately, with its avatar, group memberships, file shares, and OAuth apps. A queued job then deletes its data. To track the job, use `GET api/2.0/people/remove/progress/{userId}`. If the account shared files from its own section, the job moves them to a new folder of the caller. To move rooms and shared files to another user first, use `POST api/2.0/people/reassign/start`. The call returns the profile as it was before the deletion. To delete several accounts, use `PUT api/2.0/people/delete`.  Raises the `user.deleted` webhook. Raises the `folder.created` webhook once the data deletion job creates a folder for the files that the account shared.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile as it was just before it was deleted | [**EmployeeFullWrapper**](../../models/employee-full-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The account is not disabled, is a system or an LDAP account, the caller may not delete a DocSpace administrator, or the OAuth service refused to remove the OAuth clients of the account | - | - |
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
