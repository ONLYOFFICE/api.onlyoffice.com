# removeUsers

> EmployeeFullArrayWrapper removeUsers(UpdateMembersRequestDto)

`PUT /api/2.0/people/delete`

Delete users

Deletes several portal profiles in one call and queues the erasure of the data behind each of them. Every listed account has to be disabled already - set the `Terminated` status through `PUT api/2.0/people/status/{status}` first, because a single account that is still active rejects the whole call with 403 - and the caller needs the permission to add and remove users. System and LDAP accounts are dropped from the list without an error, and so are the accounts the caller may not delete: a room admin when the caller is not a DocSpace admin, and a DocSpace admin when the caller is not the portal owner. The answer lists every account that was asked for, including the ones that were skipped, so it is not proof that an account was deleted - read `GET api/2.0/people/{userid}` for that, which then answers 404. The removal is permanent and cannot be undone, and each deleted account raises a `UserDeleted` webhook while its data is erased by a queued job that can be watched through `GET api/2.0/people/remove/progress/{userid}`. Hand the rooms and the shared files over first through `POST api/2.0/people/reassign/start` - an account with an unfinished reassignment cannot be deleted.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](../../models/update-members-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every account that was asked for, including the ones that were skipped | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The userIds field is missing | - | - |
| **403** | No permissions to perform this action, or one of the listed accounts is not disabled | - | - |
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
