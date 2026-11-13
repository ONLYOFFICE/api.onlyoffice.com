# moveSubscriptionToWallet

> BooleanWrapper moveSubscriptionToWallet(QuantityRequestDto)

`POST /api/2.0/portal/payment/subscription/movetowallet`

Move the subscription to the wallet

Ends the paid subscription of the portal and moves the portal to the wallet. First, the call adds the unused balance of the period to the wallet. Then it tops up the wallet from the payment method if that credit does not cover the price. Then it buys the requested number of admins as a wallet service. To read the credit first, use `GET api/2.0/portal/payment/subscription/balance`. If the portal has no billing customer, the call returns 404. If the customer has no payment method, the call returns 403. The payer is the portal user whose email is the email of the billing customer. Only the payer can call it. Other callers get 403. The call also returns 403 if the installation has no billing service. The call spends money and cannot be undone. Do not repeat it. The call ends the subscription before it buys the admins. If the purchase fails, the call returns `false` with 200. The portal is then on the wallet, with the credit and any top-up in it. To buy the admins after that, use `Add` in `PUT api/2.0/portal/payment/updatewallet`. With a delayed payment method, the call does not top up the wallet. Then the wallet must already cover the price. The call returns `true` if the admins were bought. The product in `quantity` must be the admins wallet service. The call returns 400 for another product or a quantity of zero or less. It also returns 400 for fewer admins than the portal already has. If the paid plan is a wallet product, the call returns 400. If the plan is not paid, the call returns 402. It also returns 402 if the balance cannot be moved. The next two errors come after the subscription has ended. If the wallet still lacks money after the top-up, the call returns 402. If the wallet has no sub-account in the accounting currency, the call returns 404. If the paid plan has no subscription, the call returns 404. By default, the limit is 10 calls a minute per user. More calls return 429.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **QuantityRequestDto** | body | [**QuantityRequestDto**](../../models/quantity-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the balance was moved to the wallet and the administrators were bought; `false` when the subscription has ended and the balance was moved, but the purchase of the administrators failed | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `quantity`, `quantity` does not hold exactly one product or does not name the administrators wallet product, the number asked for is not greater than zero or is below the administrators the portal already has, or the plan currently paid is a wallet product or has no product identifier | - | - |
| **402** | The plan of the portal is not paid, the balance could not be moved, or the wallet is still short of the price after the top-up | - | - |
| **403** | The caller is not the payer of this portal, the portal has no billing service configured, or the customer has no payment method set | - | - |
| **404** | This portal has no billing customer, its paid plan has no subscription, or after the move its wallet has no balance or no sub-account in the accounting currency | - | - |
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
