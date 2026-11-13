# getQuotaPaymentInformation

> QuotaWrapper getQuotaPaymentInformation(refresh)

`GET /api/2.0/portal/payment/quota`

Get the current plan and limits

Returns the quota of the portal, paid or free, with the limits of its features and their usage. Any signed-in user can call it, except a guest. A guest gets 403. The call is read-only. By default, the call reads the plan from the cache. With `refresh=true`, it reads the plan from the billing service, so use it right after a purchase. The answer depends on the user type of the caller. A DocSpace admin or the portal owner gets the price, the due date, and all features. A room admin gets only the `manager`, `room`, `total_size`, and `statistic` features. A user gets only the `total_size` feature. For a room admin and a user, `price` is an empty object and `dueDate` is missing. If the plan has the `statistic` feature or the installation is standalone, every caller gets `usersQuota`, `roomsQuota`, `aiAgentsQuota`, and `tenantCustomQuota`. To read the quotas that the portal can buy, use `GET api/2.0/portal/payment/quotas`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a purchase or a top-up and not on every read. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The quota the portal is on with its limits and current usage, trimmed to what the caller's user type may see | [**QuotaWrapper**](../../models/quota-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
