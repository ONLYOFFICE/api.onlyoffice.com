# getAccountingServicePrices

Referenced types are defined in the [full reference](../api.md).

> ServicePriceInfoArrayWrapper getAccountingServicePrices(serviceName, active)

`GET /api/2.0/portal/payment/accounting/prices/{serviceName}`

Get the service prices from the accounting service

Returns the portal's automatic wallet top-up settings: whether it is switched on, the balance that triggers it, the balance it tops the wallet up to and the currency it charges in. Only a DocSpace administrator may read it, no billing customer is needed, and the call is read-only. A portal that has never configured it gets the defaults rather than an empty result, so `enabled` is the field that says whether anything happens at all. Two of the values are kept by the portal itself and cannot be set through this API: `lowBalanceThreshold` is the balance below which the portal warns its administrators by mail, and `lowBalanceNotified` says whether that warning has already gone out for the current dip. Change the rest with `POST api/2.0/portal/payment/topupsettings`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **serviceName** | path | **String** | The service whose price list is read, named the way the billing catalogue names it, such as `ai-tools` or `backup`. Take the value from the `serviceName` field of `GET api/2.0/portal/payment/walletservices`; a name the accounting service does not price yields an empty list rather than an error. | [required] [example: `ai-tools`] [minLength: 0] [maxLength: 255] |
| **active** | query | **Boolean** | Whether the answer is narrowed to the prices in force at the moment of the call. Leaving it false also returns the retired and the not yet started ones, which is what pricing a movement recorded in the past needs. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The list of the service prices | [**ServicePriceInfoArrayWrapper**](../api.md#model-servicepriceinfoarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ServicePriceInfoArrayWrapper**](../api.md#model-servicepriceinfoarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
