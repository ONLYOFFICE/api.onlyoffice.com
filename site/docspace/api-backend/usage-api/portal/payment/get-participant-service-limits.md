# getParticipantServiceLimits

> ServiceLimitReportWrapper getParticipantServiceLimits(offset, limit, orderBy, orderType)

`GET /api/2.0/portal/payment/servicelimit/participants`

Get the user service limits

Returns a page of the spending limits on the AI services that apply to the portal users. Each item has what the user spent in the current period and what is left. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. If the portal has no billing customer, the call returns 404. The call is read-only. If the portal has no limits, the page is empty. A personal limit wins over the limit for every user. An item with the scope `Custom` is a personal limit. An item with the scope `Global` is the limit for every user. Its ID repeats for each user that it applies to. The list has no turned-off limits. A user who has not used the AI services yet can be missing. By default, `offset` is 0 and `limit` is 25. The answer repeats them next to `totalQuantity`, `totalPage`, and `currentPage`. By default, the newest limits come first. The call returns 400 if `offset`, `limit`, `orderBy`, or `orderType` is out of range.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **offset** | query | **Integer** (int32) | The number of limits to skip before the first one returned, counted in the sort order of the list. | [optional] [example: `0`] [min: 0] [max: 2147483647] |
| **limit** | query | **Integer** (int32) | The largest number of limits one page holds. | [optional] [example: `25`] [min: 1] [max: 100] |
| **orderBy** | query | **ServiceLimitOrderBy** | The field the list is sorted by: the user a limit applies to, or the moment it was created. | [optional] [example: `Created`] [enum: `0`, `1`] |
| **orderType** | query | **OperationOrderType** | The direction the field named in `orderBy` is sorted in. | [optional] [example: `Descending`] [enum: `0`, `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A page of the limits in force for the users with their spending and paging information | [**ServiceLimitReportWrapper**](../../models/service-limit-report-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `offset` is negative, `limit` is outside the allowed page size, or `orderBy` or `orderType` is not one of its values | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | The portal has no billing customer | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ServiceLimitReportWrapper**](../../models/service-limit-report-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
