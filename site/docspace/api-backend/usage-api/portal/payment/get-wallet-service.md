# getWalletService

> WalletServiceWrapper getWalletService(service)

`GET /api/2.0/portal/payment/walletservice`

Get a wallet service

Returns one wallet service by its name. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call is read-only. The call returns 404 if the installation does not sell the service. It also returns 404 for AI tools and AI search while AI is turned off for the portal. If `service` is empty or is not a wallet service, the call returns 400. The item has the fields of an item of `GET api/2.0/portal/payment/walletservices`. Unlike that list, it does not group the variants of a service in `innerServices`. The price is in the currency of the request.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **service** | query | **TenantWalletService** | The service to look up, given by its catalogue name. A service this installation does not sell answers 404, and the whole catalogue is `GET api/2.0/portal/payment/walletservices`. | [required] [example: `Storage`] [enum: `-18`, `-16`, `-15`, `-14`, `-13`, `-12`, `-11`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet service with its price, unit and the limits it grants | [**WalletServiceWrapper**](../../models/wallet-service-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `service` is sent empty, or is neither the name nor the number of a wallet service | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **404** | This installation does not sell a wallet service under that name | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WalletServiceWrapper**](../../models/wallet-service-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
