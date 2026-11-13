# getCustomerBalance

> BalanceWrapper getCustomerBalance(refresh)

`GET /api/2.0/portal/payment/customer/balance`

Get the customer balance

Returns the money in the portal wallet as the accounting service has it. The answer has a sub-account with its amount for each currency and the last credit movement. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. If the portal has no billing customer, the call returns an empty result. The call is read-only. The wallet services spend this balance, and `POST api/2.0/portal/payment/deposit` adds to it. To list the movements, use `GET api/2.0/portal/payment/customer/operations`. Each call reads the balance from the accounting service, so it is current right after a top-up too. Only a failed read is cached. A read fails if the service cannot be reached, answers with an error, or does not know the portal. Then the call returns an empty result for 10 minutes. Use `refresh=true` to read it again immediately.

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
