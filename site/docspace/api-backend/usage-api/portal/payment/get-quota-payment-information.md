# getQuotaPaymentInformation

> QuotaWrapper getQuotaPaymentInformation(refresh)

`GET /api/2.0/portal/payment/quota`

Get the current plan and limits

Returns the quota the portal is on right now - its paid plan or the free one - with everything a client needs to render itself: the price, the features that are switched on, the limits they grant (rooms, storage in bytes, users, administrators, AI) and how much of each is already used. Every signed-in member of the portal reads it, so it is not restricted to administrators; only guests are refused with 403. The call is read-only. The plan is served from the cache by default, which is what a start-up needs; `refresh=true` fetches it from the billing service instead, so use that right after a purchase and not routinely, because it is a remote call. The catalogue of the quotas that could be bought instead is `GET api/2.0/portal/payment/quotas`, and the money side of the same portal - customer, wallet and balance - starts at `GET api/2.0/portal/payment/customerinfo`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a purchase or a top-up and not on every read. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The quota the portal is on, with its price, features, limits and current usage | [**QuotaWrapper**](../../models/quota-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest of this portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**QuotaWrapper**](../../models/quota-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
