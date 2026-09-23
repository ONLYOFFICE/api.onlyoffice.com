# searchUsersByQuery

Referenced types are defined in the [full reference](../people.md).

> EmployeeFullArrayWrapper searchUsersByQuery(query)

`GET /api/2.0/people/search`

Search users by query

Searches the active accounts of the portal by a term passed in the query string, and is the same search as `GET api/2.0/people/@search/{query}`, which takes the term in the path instead. Only a DocSpace administrator may call it; every other account, including a room admin, gets 403. Only accounts with the `Active` status are searched, so a pending invitation and a disabled account are never found - use `GET api/2.0/people/filter` to search across states. The call is read-only and is not paged: every match is streamed, without a total. It takes the search term and nothing else - the group filter of `GET api/2.0/people/@search/{query}` is not reachable here, because the handler forwards only `query` - so use that operation when the result has to be narrowed to one group. The answer holds full profiles, because the handler passes the request on to the operation that builds the complete profile.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **query** | query | **String** | The term to look for. Only accounts with the `Active` status are searched, and this is the only parameter the operation reads. | [optional] [example: `John`] |

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
