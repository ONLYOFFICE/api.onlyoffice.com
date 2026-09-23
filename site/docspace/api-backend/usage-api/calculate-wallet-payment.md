# calculateWalletPayment

Referenced types are defined in the [full reference](../api.md).

> PaymentCalculationWrapper calculateWalletPayment(WalletQuantityRequestDto)

`PUT /api/2.0/portal/payment/calculatewallet`

Calculate the wallet payment amount

Prices a wallet-service purchase without making it: it returns what buying the requested number of units would cost right now, so a client can show the amount before asking for a confirmation. Only `productQuantityType` `Add` (1) is accepted, the quantity must be greater than zero, and the portal needs a billing customer whose wallet has a sub-account in the accounting currency. The caller has to be a DocSpace administrator. Nothing is bought, charged or written down - the call is read-only and may be repeated - and the purchase itself is `PUT api/2.0/portal/payment/updatewallet`. The answer carries the amount with its currency, the quantity it was computed for and the identifier of the calculation. It is the price of this moment and is not held: it can differ by the time the purchase is made.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WalletQuantityRequestDto** | body | [**WalletQuantityRequestDto**](../api.md#model-walletquantityrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The amount the purchase would cost, its currency and the quantity it was calculated for | [**PaymentCalculationWrapper**](../api.md#model-paymentcalculationwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The quantity type is not `Add`, the quantity is not greater than zero, or the product is not a wallet service | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no sub-account in the accounting currency | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PaymentCalculationWrapper**](../api.md#model-paymentcalculationwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
