# getSearch

> EmployeeFullArrayWrapper getSearch(query, filterBy, filterValue)

`GET /api/2.0/people/@search/{query}`

Search users

Searches the active accounts of the portal by the term in the path. Requires a DocSpace admin. Other callers get 403, including a room admin. The call skips pending and disabled accounts. The call is read-only. It returns all matches with full profiles, without paging or a total. With `filterBy` set to `group`, `filterValue` is a group ID. The call then keeps only the members of that group. To search in all states, use `GET api/2.0/people/filter`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **query** | path | **String** | The term to look for, taken from the route. Only accounts with the `Active` status are searched. | [required] [example: `John`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which turns `filterValue` into a group ID and keeps only the members of that group. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **filterValue** | query | **String** | The group ID to keep the members of, used only when `filterBy` is `group`. It has to be a valid identifier - a group name is not accepted. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profiles of the matching active accounts | [**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../../models/employee-full-array-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
