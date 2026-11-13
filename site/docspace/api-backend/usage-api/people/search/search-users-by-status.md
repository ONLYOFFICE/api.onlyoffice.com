# searchUsersByStatus

> EmployeeFullArrayWrapper searchUsersByStatus(status, query, filterBy, filterValue)

`GET /api/2.0/people/status/{status}/search`

Search users by status filter

Searches the accounts with the status from the route. The term in `query` must be in the name, user name, email, or contacts. Requires a DocSpace admin. Other callers get 403, including a room admin. The call is read-only. It matches the term as a substring and ignores case. If `query` is missing, the call returns 400. With `filterBy` set to `group`, `filterValue` is a group ID. The call then keeps only the members of that group. The list has no paging, no total, and no fixed order. For a page with a total, use `GET api/2.0/people/filter`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **status** | path | **EmployeeStatus** | The account state to search in, taken from the route: `Active` for working accounts, `Terminated` for disabled ones, `Pending` for open invitations, or `All` for every state. | [required] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **query** | query | **String** | The term to look for, matched as a case-insensitive substring of the first name, the last name, the user name, the email and the contacts. It is required in practice, because the search cannot run without it. | [optional] [example: `John`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which turns `filterValue` into a group ID and keeps only the members of that group. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **filterValue** | query | **String** | The group ID to keep the members of, used only when `filterBy` is `group`. It has to be a valid identifier - a group name is not accepted. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profiles of the matching accounts | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A parameter has the wrong type, or `query` is missing | - | - |
| **403** | The caller is not a DocSpace administrator | - | - |
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

- **Content-Type**: Not defined
- **Accept**: application/json
