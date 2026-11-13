# getPaymentCurrencies

> CurrenciesArrayWrapper getPaymentCurrencies()

`GET /api/2.0/portal/payment/currencies`

Get the billing currencies

Returns the currencies of the plan prices for the portal. The first item is always the default currency, USD. The second item, if any, is the currency of the region of the request. The call finds that region from the IP address of the caller or the language of the portal owner. If no product has a price in the currency of that region, the list has only the first item. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The wallet uses other currencies, the accounting currencies. To read them with the balance, use `GET api/2.0/portal/payment/customer/balance`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The default currency of the portal region first, followed by the currency of the current request when it differs | [**CurrenciesArrayWrapper**](../../models/currencies-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
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
