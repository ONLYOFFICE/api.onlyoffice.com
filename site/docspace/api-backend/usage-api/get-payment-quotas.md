# getPaymentQuotas

Referenced types are defined in the [full reference](../api.md).

> QuotaArrayWrapper getPaymentQuotas(wallet, additional)

`GET /api/2.0/portal/payment/quotas`

Get the purchasable quotas

Lists the quotas the portal can be put on - the paid plans and the wallet services - each with its price, its features and the limits it grants, which is what a pricing page is built from. Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is read-only. Only quotas marked visible are listed, newest first, and the two optional filters narrow that: `wallet` selects the wallet services (`true`) or the subscription plans (`false`), `additional` selects the add-ons to a plan (`true`) or the plans themselves (`false`), and an omitted filter keeps both kinds. A portal on a non-profit quota is a special case - asking for `additional=false` returns that single quota and nothing else, because no other plan may be bought for it. The quota the portal is actually on is not marked here; read it from `GET api/2.0/portal/payment/quota`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **wallet** | query | **Boolean** | Which side of the catalogue is listed: `true` keeps the services paid out of the portal wallet, `false` keeps the subscription plans, and omitting it keeps both. | [optional] [example: `true`] |
| **additional** | query | **Boolean** | Which layer of the catalogue is listed: `true` keeps the add-ons that extend a plan, `false` keeps the plans themselves, and omitting it keeps both. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The visible quotas matching the filters, newest first, each with its price, features and limits | [**QuotaArrayWrapper**](../api.md#model-quotaarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**QuotaArrayWrapper**](../api.md#model-quotaarraywrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
