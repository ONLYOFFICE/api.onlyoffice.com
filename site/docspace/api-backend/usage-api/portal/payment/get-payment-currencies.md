# getPaymentCurrencies

> CurrenciesArrayWrapper getPaymentCurrencies()

`GET /api/2.0/portal/payment/currencies`

Get the billing currencies

Tells a client which currency the portal is billed in: the default currency of the portal region always comes first, followed by the currency resolved for the current request when that one differs, so the answer holds one or two items. Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is read-only. Each item carries the country code of the region, the currency symbol and the native name of the currency; the first item is the currency the amounts from `GET api/2.0/portal/payment/prices` are expressed in. These are the currencies of the subscription prices, and they are not the accounting currencies the wallet is topped up in - those come with the balance in `GET api/2.0/portal/payment/customer/balance`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The default currency of the portal region first, followed by the currency of the current request when it differs | [**CurrenciesArrayWrapper**](../../models/currencies-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CurrenciesArrayWrapper**](../../models/currencies-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
