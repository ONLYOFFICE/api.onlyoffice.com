# getSubscriptionBalanceInfo

> SubscriptionBalanceWrapper getSubscriptionBalanceInfo()

`GET /api/2.0/portal/payment/subscription/balance`

Get the subscription balance information

Returns the unused part of the current paid subscription period of the portal, in money. This is the credit that `POST api/2.0/portal/payment/subscription/movetowallet` moves to the wallet. If the portal has no billing customer, the call returns 404. The payer is the portal user whose email is the email of the billing customer. Only the payer can call it. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only. If the plan is not paid, the call returns 402. It also returns 402 if the billing service fails or cannot be reached. If the paid plan has no subscription, the call returns 404. If the paid plan is a wallet product or has no product ID, the call returns 400. The figures are for the moment of the call, so they change between calls.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The unused balance of the current subscription period with its period boundaries and currencies | [**SubscriptionBalanceWrapper**](../../models/subscription-balance-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The plan currently paid is a wallet product or has no product identifier | - | - |
| **402** | The plan of the portal is not in the paid state, or the billing service answers with an error or cannot be reached | - | - |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its paid plan has no subscription | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SubscriptionBalanceWrapper**](../../models/subscription-balance-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
