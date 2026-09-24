# getWalletServices

> WalletServiceArrayWrapper getWalletServices()

`GET /api/2.0/portal/payment/walletservices`

Get wallet services

Lists every service the portal may pay for out of its wallet - extra administrators, disk storage, backup, AI tools, AI search and Docs Connect - with the price of a unit, the unit it is sold in and whether the portal has it switched on. Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is read-only. Services that are variants of one another are folded together: the visible one carries the rest in its `innerServices`, so a client renders one card per group. The AI services are left out entirely when AI is not enabled for the portal. This is the catalogue and not the state of the portal - what is actually running is `GET api/2.0/portal/payment/activeservices`, one service on its own is `GET api/2.0/portal/payment/walletservice`, and switching one on or off is `POST api/2.0/portal/payment/servicestate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet services on offer, with their prices, units and grouped variants | [**WalletServiceArrayWrapper**](../../models/wallet-service-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings | - | - |
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
