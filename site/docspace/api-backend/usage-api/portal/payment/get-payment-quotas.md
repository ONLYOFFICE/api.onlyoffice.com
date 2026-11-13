# getPaymentQuotas

> QuotaArrayWrapper getPaymentQuotas(wallet, additional)

`GET /api/2.0/portal/payment/quotas`

Get the purchasable quotas

Returns the quotas that the portal can buy: the paid plans and the wallet services. Each quota has its price, features, and limits, so you can build a pricing page from the list. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The list has only the visible quotas, the newest first. The filters `wallet` and `additional` narrow the list, and an omitted filter keeps both kinds. If the portal is on a non-profit quota, `additional=false` returns only that quota. The list does not mark the current quota of the portal. To read it, use `GET api/2.0/portal/payment/quota`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **wallet** | query | **Boolean** | Which side of the catalogue is listed: `true` keeps the services paid out of the portal wallet, `false` keeps the subscription plans, and omitting it keeps both. | [optional] [example: `true`] |
| **additional** | query | **Boolean** | Which layer of the catalogue is listed: `true` keeps the add-ons that extend a plan, `false` keeps the plans themselves, and omitting it keeps both. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The visible quotas matching the filters, newest first, each with its price, features and limits | [**QuotaArrayWrapper**](../../models/quota-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**QuotaArrayWrapper**](../../models/quota-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
