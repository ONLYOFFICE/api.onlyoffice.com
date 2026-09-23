# getGroupByUserId

Referenced types are defined in the [full reference](../people.md).

> GroupSummaryArrayWrapper getGroupByUserId(userid)

`GET /api/2.0/group/user/{userid}`

Get user groups

Returns every group the account with the ID in the route belongs to, as a flat list of ID and name pairs. The caller needs the permission to read groups. The call is read-only, is not paged, and answers an empty list both for an account that belongs to no group and for an ID that matches no account, so an empty answer does not prove the account exists. The entries are summaries and carry neither the manager nor the members - read `GET api/2.0/group/{id}` for the full picture of one of them.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the account whose groups are listed, taken from the route. An ID that matches no account yields an empty list rather than 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The groups the account belongs to, as ID and name pairs | [**GroupSummaryArrayWrapper**](../people.md#model-groupsummaryarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupSummaryArrayWrapper**](../people.md#model-groupsummaryarraywrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
