# getAccountingServicePrices

> ServicePriceArrayWrapper getAccountingServicePrices(serviceName, active)

`GET /api/2.0/portal/payment/accounting/prices/{serviceName}`

Get the service prices from the accounting service

Returns the price list of one wallet service as the accounting service keeps it: every price record with its time unit, cost and resulting price, volume threshold, validity period, status and discount category. Take the service name from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`. The caller must be a DocSpace administrator, and the server must have the billing and accounting services configured; otherwise the call fails with 403. The call is read-only and can be repeated safely. By default the list also holds retired and not yet started records; `active=true` keeps only the prices in force now. A service with no prices comes back as an empty list. Amounts are in the currency of the service, which the records do not name. The list is cached for all portals for up to an hour, so a change in the accounting service can take that long to appear. For the current price of every plan and wallet service as the customer sees it, use `GET api/2.0/portal/payment/quotas`. An unknown service name fails with 500, as does an unreachable accounting service.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **serviceName** | path | **String** | The service whose price list is read, named the way the billing catalogue names it, such as `ai-tools` or `backup`. Take the value from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`. | [required] [example: `ai-tools`] [minLength: 0] [maxLength: 255] |
| **active** | query | **Boolean** | Whether the answer is narrowed to the prices in force at the moment of the call. Leaving it false also returns the retired and the not yet started ones, which is what pricing a movement recorded in the past needs. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The list of the service prices | [**ServicePriceArrayWrapper**](../../models/service-price-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `serviceName` is longer than 255 characters | - | - |
| **403** | The caller is not a DocSpace administrator, or the billing and accounting services are not configured on the server | - | - |
| **500** | The accounting service does not know the service name, answers the price request with an error or cannot be reached | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ServicePriceArrayWrapper**](../../models/service-price-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
