# calculateWalletPayment

> PaymentCalculationWrapper calculateWalletPayment(WalletQuantityRequestDto)

`PUT /api/2.0/portal/payment/calculatewallet`

Calculate the wallet payment amount

Returns the price of a wallet service purchase without making it. Use it to show the amount before the user confirms the purchase. The call returns 400 if `productQuantityType` is not `Add` or the quantity is not above zero. It also returns 400 if the product is not a wallet service. If the portal has no billing customer or no wallet sub-account in the accounting currency, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The call is read-only and buys nothing, so you can repeat it. To make the purchase, use `PUT api/2.0/portal/payment/updatewallet`. The price is for the moment of the call and is not reserved. So it can change before the purchase. If the billing service fails, the call returns 200 with an empty body.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WalletQuantityRequestDto** | body | [**WalletQuantityRequestDto**](../../models/wallet-quantity-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The amount the purchase would cost, its currency and the quantity it was calculated for, or an empty body when the billing service failed | [**PaymentCalculationWrapper**](../../models/payment-calculation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `quantity`, `quantity` does not hold exactly one product, the quantity type is not `Add`, the quantity is not greater than zero, or the product is not a wallet service | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no balance or no sub-account in the accounting currency | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PaymentCalculationWrapper**](../../models/payment-calculation-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
