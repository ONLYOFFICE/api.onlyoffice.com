# getCustomerBalance

> BalanceWrapper getCustomerBalance(refresh)

`GET /api/2.0/portal/payment/customer/balance`

Get the customer balance

Returns the money the portal has in its wallet as the accounting service holds it: the account with its own currency, one sub-account per currency with the amount on it, and the most recent credit movement. Only a DocSpace administrator may read it, an installation without a billing service answers 403, and a portal that has never been a customer gets an empty result. The call is read-only. This balance is what the wallet services are charged against, so it falls as they are used and rises with `POST api/2.0/portal/payment/deposit`; the movements behind a change are listed by `GET api/2.0/portal/payment/customer/operations`. Pass `refresh=true` to re-read it from the accounting service rather than the cache - right after a top-up the cached figure is still the old one.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a purchase or a top-up and not on every read. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet account with its sub-account per currency, or an empty result when the portal has no billing customer | [**BalanceWrapper**](../../models/balance-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BalanceWrapper**](../../models/balance-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
