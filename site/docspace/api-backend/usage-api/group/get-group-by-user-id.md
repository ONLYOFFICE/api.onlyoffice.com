# getGroupByUserId

> GroupSummaryArrayWrapper getGroupByUserId(userId)

`GET /api/2.0/group/user/{userId}`

Get user groups

Returns all groups that an account belongs to, as ID and name pairs. Requires a DocSpace admin or a room admin. Other callers get 403, even for their own groups. The call is read-only and does not page the list. The entries have no manager and no members. An empty list means the account is in no group or does not exist. To read one group in full, use `GET api/2.0/group/{id}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **UUID** (uuid) | The ID of the account whose groups are listed, taken from the route. An ID that matches no account yields an empty list rather than 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The groups the account belongs to, as ID and name pairs | [**GroupSummaryArrayWrapper**](../models/group-summary-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupSummaryArrayWrapper**](../models/group-summary-array-wrapper.md)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
