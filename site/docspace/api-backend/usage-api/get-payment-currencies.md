# getPaymentCurrencies

Referenced types are defined in the [full reference](../api.md).

> CurrenciesArrayWrapper getPaymentCurrencies()

`GET /api/2.0/portal/payment/currencies`

Get the billing currencies

Tells a client which currency the portal is billed in: the default currency of the portal region always comes first, followed by the currency resolved for the current request when that one differs, so the answer holds one or two items. Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is read-only. Each item carries the country code of the region, the currency symbol and the native name of the currency; the first item is the currency the amounts from `GET api/2.0/portal/payment/prices` are expressed in. These are the currencies of the subscription prices, and they are not the accounting currencies the wallet is topped up in - those come with the balance in `GET api/2.0/portal/payment/customer/balance`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The default currency of the portal region first, followed by the currency of the current request when it differs | [**CurrenciesArrayWrapper**](../api.md#model-currenciesarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CurrenciesArrayWrapper**](../api.md#model-currenciesarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
