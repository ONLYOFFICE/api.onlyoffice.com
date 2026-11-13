# updateWalletPayment

> BooleanWrapper updateWalletPayment(WalletQuantityRequestDto)

`PUT /api/2.0/portal/payment/updatewallet`

Change a wallet service quantity

Buys units of a wallet service, or schedules the quantity of the service for the next period. The mode comes from `productQuantityType`. With `Add`, the call buys the units immediately and pays for them from the portal wallet. With `Set`, the call charges nothing and changes the quantity from the next period. With `Set`, an empty quantity cancels a change that was scheduled earlier. With a zero quantity, the portal does not renew the service at the next period. The call returns 400 for `Renew` and `Sub`. If the portal has no billing customer, the call returns 404. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. An `Add` call spends money. Do not repeat an `Add` call. Each call buys the units again. You can repeat a `Set` call with the same body. With `Add`, the wallet needs a sub-account in the accounting currency with enough money. If the wallet has no such sub-account, the call returns 404. If the billing service declines the purchase, fails, or cannot be reached, the call returns 402. The call returns 402 for an add-on to the plan if the plan payment is overdue. A trial plan passes this check. The call returns 400 if the quantity is below the minimum of the service. By default, the minimum is 100 units for disk storage and 10 for Docs Connect Dev Pack. With `Add`, the minimum for admins is the number of admins the portal already has. With `Add`, the call checks the minimum only while the portal does not have the service yet. With `Add`, an empty or zero quantity also returns 400. While Docs Connect is active, a request for Docs Connect Dev Pack returns 400. To move to Docs Connect Dev Pack, use `POST api/2.0/settings/docscloud/switchtodevpack`. While Docs Connect Dev Pack is active, `Set` with Docs Connect schedules the return to it. The return happens at the next period and needs a quantity above zero. In this case, `Add` with Docs Connect returns 400. With `Add`, the call returns `true`. With `Set`, it returns `true`, or `false` if the portal does not have the service or cannot save the change. By default, the limit is 10 calls a minute per user. More calls return 429. To get the price first, use `PUT api/2.0/portal/payment/calculatewallet`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WalletQuantityRequestDto** | body | [**WalletQuantityRequestDto**](../../models/wallet-quantity-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the units were bought or the change was scheduled; `false` only in the `Set` form, when the portal does not have the service or the change could not be saved | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `quantity`, `quantity` does not hold exactly one product, the quantity type is not `Set` or `Add`, the product is not a wallet service, the quantity is below the minimum for it or is empty or zero where a purchase needs one, or that service is already set | - | - |
| **402** | The payment for the plan of the portal is overdue and the requested service is an add-on to it, or in the `Add` form the billing service declines the purchase, answers with an error or cannot be reached | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no balance or no sub-account in the accounting currency | - | - |
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
