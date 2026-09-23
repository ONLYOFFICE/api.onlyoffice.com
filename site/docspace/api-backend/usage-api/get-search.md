# getSearch

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullArrayWrapper getSearch(query, filterBy, filterValue)

`GET /api/2.0/people/@search/{query}`

Search users

Searches the active accounts of the portal by a term taken from the path, and is the same search as `GET api/2.0/people/search`, which takes the term in the query string instead. Only a DocSpace administrator may call it; every other account, including a room admin, gets 403. Only accounts with the `Active` status are searched, so a pending invitation and a disabled account are never found - use `GET api/2.0/people/filter` to search across states. The call is read-only and is not paged: every match is streamed, without a total. `filterBy` set to `group` turns `text` into a group ID and keeps only the members of that group, so `text` then has to be a valid identifier. The answer holds full profiles.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **query** | path | **String** | The term to look for, taken from the route. Only accounts with the `Active` status are searched. | [required] [example: `John`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which turns `filterValue` into a group ID and keeps only the members of that group. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **filterValue** | query | **String** | The group ID to keep the members of, used only when `filterBy` is `group`. It has to be a valid identifier - a group name is not accepted. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profiles of the matching active accounts | [**EmployeeFullArrayWrapper**](../people.md#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeFullArrayWrapper**](../people.md#model-employeefullarraywrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
