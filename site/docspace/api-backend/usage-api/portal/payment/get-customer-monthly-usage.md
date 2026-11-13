# getCustomerMonthlyUsage

> CustomerMonthlyUsageArrayWrapper getCustomerMonthlyUsage(startDate, endDate)

`GET /api/2.0/portal/payment/customer/usage/monthly`

Get the customer monthly usage

Returns the spending of the portal wallet, added up per calendar month. Use it to draw a spending chart. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. If the portal has no billing customer, the call returns an empty result. The call is read-only. The call cuts the months in the portal time zone. Months without spending are not listed. To list the movements of a month, use `GET api/2.0/portal/payment/customer/operations`. To get the same figures as a file, use `POST api/2.0/portal/payment/customer/usage/monthly/report`.

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
