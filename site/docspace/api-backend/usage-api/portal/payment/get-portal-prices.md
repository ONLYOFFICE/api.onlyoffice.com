# getPortalPrices

> getPortalPrices_200_response getPortalPrices()

`GET /api/2.0/portal/payment/prices`

Get the product prices

Returns the price of one unit of each product that the portal can buy. The keys are the product names that `quantity` takes in the purchase operations. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. All prices are in one currency, which the call picks from the IP address of the caller. If no product has a price in that currency, the call uses EUR in Europe and USD elsewhere. A product without a price in the chosen currency has the price 0. So 0 means that the product has no price, not that it is free. To read the currencies of the portal, use `GET api/2.0/portal/payment/currencies`. To read the current plan with its limits and usage, use `GET api/2.0/portal/payment/quota`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Product name to the price of one unit in the currency of the request, `0` where the product has no price in it | [**getPortalPrices_200_response**](../../models/get-portal-prices-200-response.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**getPortalPrices_200_response**](../../models/get-portal-prices-200-response.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
