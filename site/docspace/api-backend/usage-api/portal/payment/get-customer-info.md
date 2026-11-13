# getCustomerInfo

> CustomerInfoWrapper getCustomerInfo(refresh)

`GET /api/2.0/portal/payment/customerinfo`

Get the customer information

Returns the billing customer of the portal. It has the billing email, whether a payment method is stored, and the payer. The payer is the portal user whose email is the billing email. Requires a DocSpace admin. Other callers get 403. The call is read-only. The call returns an empty result if the installation has no billing service. It also returns an empty result if the portal has no billing customer. If no portal user has the billing email, `payer` is empty. Then nobody can call the operations that only the payer can call. By default, the call reads the customer from the cache. With `refresh=true`, it reads the customer from the billing provider. Use it right after a payment method is attached.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a purchase or a top-up and not on every read. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The billing customer with its payer, or an empty result when the portal has no customer or billing is not configured | [**CustomerInfoWrapper**](../../models/customer-info-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomerInfoWrapper**](../../models/customer-info-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
