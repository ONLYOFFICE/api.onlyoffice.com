# getUpcomingPayments

> UpcomingPaymentArrayWrapper getUpcomingPayments(refresh)

`GET /api/2.0/portal/tariff/upcoming`

Get upcoming payments

Lists what this portal will be charged next for the quotas of its current tariff - one entry per quota that is going to be billed, with the amount, the currency and the due date. The caller needs the portal-settings right and gets 403 without it; the call is read-only and idempotent and keeps answering while the portal's payment has lapsed. Only quotas that are really charged appear: an overdue quota is skipped, and so is a quota that has no price of its own, such as a trial or a free plan - which is why the list can come back empty on a portal that does have a tariff. When a switch to another quota is scheduled for the next period, the entry describes that next quota and its quantity, so `id` and `name` may differ from what `GET api/2.0/portal/tariff` reports for today. `amount` is the unit price multiplied by `quantity`, in the currency named by `currency` as an ISO 4217 code, `dueDate` is in the portal time zone, and `wallet` marks a service paid from the portal wallet instead of the subscription.

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
