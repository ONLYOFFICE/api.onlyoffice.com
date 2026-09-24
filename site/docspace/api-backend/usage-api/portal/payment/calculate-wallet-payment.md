# calculateWalletPayment

> PaymentCalculationWrapper calculateWalletPayment(WalletQuantityRequestDto)

`PUT /api/2.0/portal/payment/calculatewallet`

Calculate the wallet payment amount

Prices a wallet-service purchase without making it: it returns what buying the requested number of units would cost right now, so a client can show the amount before asking for a confirmation. Only `productQuantityType` `Add` (1) is accepted, the quantity must be greater than zero, and the portal needs a billing customer whose wallet has a sub-account in the accounting currency. The caller has to be a DocSpace administrator. Nothing is bought, charged or written down - the call is read-only and may be repeated - and the purchase itself is `PUT api/2.0/portal/payment/updatewallet`. The answer carries the amount with its currency, the quantity it was computed for and the identifier of the calculation. It is the price of this moment and is not held: it can differ by the time the purchase is made.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WalletQuantityRequestDto** | body | [**WalletQuantityRequestDto**](../../models/wallet-quantity-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The amount the purchase would cost, its currency and the quantity it was calculated for | [**PaymentCalculationWrapper**](../../models/payment-calculation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The quantity type is not `Add`, the quantity is not greater than zero, or the product is not a wallet service | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no sub-account in the accounting currency | - | - |
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
