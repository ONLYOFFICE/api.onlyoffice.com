# moveSubscriptionToWallet

> BooleanWrapper moveSubscriptionToWallet(QuantityRequestDto)

`POST /api/2.0/portal/payment/subscription/movetowallet`

Move the subscription to the wallet

Ends the portal's paid subscription and moves it onto the wallet: the unused balance of the running period is credited to the wallet, the wallet is topped up from the payment method on file if that credit does not cover the purchase, and the requested number of administrators is then bought as a wallet service. The portal needs a billing customer with a payment method set and a plan in the paid state, `quantity` has to name the administrators wallet product, and the number asked for may not be below the administrators the portal already has - read the credit that will be carried over from `GET api/2.0/portal/payment/subscription/balance` first. Only the payer may call it. The call is mutating, spends money and cannot be undone: the subscription is ended before the purchase is attempted, so a failure in the second half leaves the portal on the wallet with the money credited but the administrators unbought, and a repeat would then buy them a second time. It is limited to ten requests a minute per user by default. The result is `true` when the administrators were bought.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **QuantityRequestDto** | body | [**QuantityRequestDto**](../../models/quantity-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the balance was moved to the wallet and the administrators were bought | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `quantity` does not name the administrators wallet product, or the number asked for is below the administrators the portal already has | - | - |
| **402** | The plan of the portal is not paid, the balance could not be moved, or the wallet is still short of the price after the top-up | - | - |
| **403** | The caller is not the payer of this portal, the portal has no billing service configured, or the customer has no payment method set | - | - |
| **404** | This portal has no billing customer, its paid plan has no subscription, or the price of the administrators product is unknown | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
