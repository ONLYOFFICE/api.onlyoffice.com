# removeUsers

> EmployeeFullArrayWrapper removeUsers(UpdateMembersRequestDto)

`PUT /api/2.0/people/delete`

Delete users

Deletes several accounts and queues the deletion of their data. First disable each account with the `Terminated` status of `PUT api/2.0/people/status/{status}`. If any listed account is still active, the call returns 403 and deletes nothing. Requires a DocSpace admin. Other callers get 403. Only the portal owner can delete a DocSpace admin. The call skips the others without an error. It ignores system and LDAP accounts and leaves them out of the response. It does the same with the IDs of deleted and unknown accounts. The call cannot be undone. A repeat deletes nothing more and returns only the listed accounts that still exist. The call returns the listed accounts, including the skipped DocSpace admins. To check a deletion, read the account with `GET api/2.0/people/{userId}`. A queued job deletes the data of each account. To track it, use `GET api/2.0/people/remove/progress/{userId}`. If an account shared files from its own section, the job moves them to a new folder of the caller. To move rooms and shared files to another user first, use `POST api/2.0/people/reassign/start`. If `userIds` is missing, the call returns 400.  Raises the `user.deleted` webhook for every account it deletes, not for a skipped one. Raises the `folder.created` webhook for every deleted account that shared files, once the job creates a folder for them.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The listed accounts, including the skipped DocSpace admins; system, LDAP, deleted and unknown accounts are left out | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The userIds field is missing | - | - |
| **403** | No permissions to perform this action, one of the listed accounts is not disabled, or the OAuth service refused to remove the OAuth clients of an account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
