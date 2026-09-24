# getCustomerMonthlyUsage

> CustomerMonthlyUsageArrayWrapper getCustomerMonthlyUsage(startDate, endDate)

`GET /api/2.0/portal/payment/customer/usage/monthly`

Get the customer monthly usage

Returns what the portal spent from its wallet added up per calendar month, so a client can draw a spending chart without paging through every movement. Only a DocSpace administrator may read it, a portal with no billing customer answers with an empty result, and the call is read-only. `startDate` and `endDate` bound the period, both inclusive, and default to the portal creation date and the present moment; the months are cut in the portal time zone, so a movement at the edge of a month falls where the portal sees it and not where UTC does. Each item names its year and month, the total charged in it with the currency, and how many operations that total came from. The movements behind a month are in `GET api/2.0/portal/payment/customer/operations`, and the same figures as a file come from `POST api/2.0/portal/payment/customer/usage/monthly/report`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **startDate** | query | **Date** (date-time) | The beginning of the reported period, inclusive. The months are cut in the portal time zone rather than in UTC, so spending at the turn of a month falls where the portal sees it; defaults to the portal creation date. | [optional] [example: `2025-01-01T00:00:00Z`] |
| **endDate** | query | **Date** (date-time) | The end of the reported period, inclusive. Cut in the portal time zone in the same way as `startDate`, and defaults to the moment the call is made. | [optional] [example: `2025-12-31T23:59:59Z`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | One item per calendar month that had spending, or an empty result when the portal has no billing customer | [**CustomerMonthlyUsageArrayWrapper**](../../models/customer-monthly-usage-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomerMonthlyUsageArrayWrapper**](../../models/customer-monthly-usage-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
