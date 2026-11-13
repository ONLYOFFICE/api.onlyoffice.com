# getUpcomingPayments

> UpcomingPaymentArrayWrapper getUpcomingPayments(refresh)

`GET /api/2.0/portal/tariff/upcoming`

Get upcoming payments

Returns the next charges of the portal for the quotas of its tariff. The list has one entry per quota. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only and also works while the portal is unpaid. The list skips overdue quotas. It also skips quotas without a price, such as a trial or a free plan. So the list can be empty on a portal with a tariff. If a switch to another quota is planned, the entry shows the next quota and its quantity. With `refresh` set to `true`, the call reads the tariff from the billing system instead of the cache.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the tariff is re-read from the billing system instead of the portal cache. The remote read is slower, so ask for it right after a payment and leave it off for ordinary page loads. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The charges the portal is going to be billed next, one entry per quota, empty when nothing is due | [**UpcomingPaymentArrayWrapper**](../../models/upcoming-payment-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**UpcomingPaymentArrayWrapper**](../../models/upcoming-payment-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
