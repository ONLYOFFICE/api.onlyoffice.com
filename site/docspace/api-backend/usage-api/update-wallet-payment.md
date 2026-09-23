# updateWalletPayment

Referenced types are defined in the [full reference](../api.md).

> BooleanWrapper updateWalletPayment(WalletQuantityRequestDto)

`PUT /api/2.0/portal/payment/updatewallet`

Change a wallet service quantity

Buys more units of a wallet service - extra administrators, disk storage, backup, AI tools, AI search or Docs Connect - or writes down the quantity that service will have after the next renewal, depending on `productQuantityType`. With `Add` (1) the units are bought at once and paid out of the portal wallet, so the wallet needs a sub-account in the accounting currency and enough money on it; with `Set` (0) nothing is charged now and the quantity only takes effect in the next period, where an empty or zero quantity cancels a change scheduled earlier. `Renew` and `Sub` are not accepted here. The portal needs a billing customer and the caller has to be a DocSpace administrator; a service that is an add-on to the plan also needs the plan itself to be paid, otherwise the answer is 402. Minimum quantities apply - disk storage starts at 100 units, the Docs Connect Dev Pack at 10, and the administrators may not be fewer than the portal already has - and in the `Add` form they are checked only while the portal does not hold that service yet. Asking for the Docs Connect plan in the `Set` form while Docs Connect Dev Pack is active schedules the reversion to it at the next period, while the upgrade in the other direction is not done here at all: use `POST api/2.0/settings/docscloud/switchtodevpack`. The result is `true` when the change was accepted; the call is mutating, spends money in its `Add` form and is limited to ten requests a minute per user by default. Price the same purchase without paying for it with `PUT api/2.0/portal/payment/calculatewallet`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **WalletQuantityRequestDto** | body | [**WalletQuantityRequestDto**](../api.md#model-walletquantityrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the purchase or the scheduled change was accepted, `false` when the provider declined it | [**BooleanWrapper**](../api.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The quantity type is not `Set` or `Add`, the product is not a wallet service, the quantity is below the minimum for it, or that service is already set | - | - |
| **402** | The plan of the portal is not paid and the requested service is an add-on to it | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no sub-account in the accounting currency | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../api.md#model-booleanwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PortalQuotaApi
