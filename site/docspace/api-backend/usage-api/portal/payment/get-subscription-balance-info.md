# getSubscriptionBalanceInfo

> SubscriptionBalanceInfoWrapper getSubscriptionBalanceInfo()

`GET /api/2.0/portal/payment/subscription/balance`

Get the subscription balance information

Reports in money how much of the portal's paid subscription period is still unused - the credit that `POST api/2.0/portal/payment/subscription/movetowallet` would carry over to the wallet if the subscription were ended now. The portal must have a billing customer and a plan in the paid state; a plan that is not paid answers 402, and a paid plan without a subscription row gives 404. Only the payer - the portal user whose e-mail is the billing customer's e-mail - may read it, and the call is read-only. The answer states the total cost of the current period with its currency, the start and the end of that period in UTC, the moment the unused part is measured up to, the days already elapsed, and the remaining balance both in the subscription currency and converted to the wallet currency. Every figure is computed for the instant of the request, so it changes between calls.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The unused balance of the current subscription period with its period boundaries and currencies | [**SubscriptionBalanceInfoWrapper**](../../models/subscription-balance-info-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The plan currently paid is a wallet product or has no product identifier | - | - |
| **402** | The plan of the portal is not in the paid state | - | - |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its paid plan has no subscription | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SubscriptionBalanceInfoWrapper**](../../models/subscription-balance-info-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
