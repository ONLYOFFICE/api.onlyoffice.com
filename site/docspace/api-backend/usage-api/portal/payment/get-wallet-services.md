# getWalletServices

> WalletServiceArrayWrapper getWalletServices()

`GET /api/2.0/portal/payment/walletservices`

Get wallet services

Returns every service that the portal can pay for from its wallet. The services are extra admins, disk storage, backup, AI tools, AI search, and Docs Connect. Each item has the price of a unit, the unit, and whether the service is turned on. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. Variants of one service form a group. The visible variant holds the others in `innerServices`. If AI is turned off for the portal, the list has no AI services. To read the services that run on the portal, use `GET api/2.0/portal/payment/activeservices`. To read one service, use `GET api/2.0/portal/payment/walletservice`. To turn a service on or off, use `POST api/2.0/portal/payment/servicestate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet services on offer, with their prices, units and grouped variants | [**WalletServiceArrayWrapper**](../../models/wallet-service-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WalletServiceArrayWrapper**](../../models/wallet-service-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
