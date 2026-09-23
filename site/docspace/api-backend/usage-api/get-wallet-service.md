# getWalletService

Referenced types are defined in the [full reference](../api.md).

> WalletServiceWrapper getWalletService(service)

`GET /api/2.0/portal/payment/walletservice`

Get a wallet service

Returns one wallet service by name, for a client that already knows which service it needs and does not want the whole catalogue. `service` is the name of the service - `Storage`, `Backup`, `AITools`, `Admin`, `DocsCloud`, `DocsCloudDevPack` or `AISearch` - and a name this installation does not sell answers 404. Nothing has to be called first, the caller needs the permission to edit the portal settings, and the call is read-only. The answer has the same shape as one item of `GET api/2.0/portal/payment/walletservices` - the price of a unit, the unit, the limits the service grants and its service name - except that the variants of a service are not grouped into `innerServices` here, because a single service is looked up directly. The price is in the currency resolved for the request.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **service** | query | **TenantWalletService** | The service to look up, given by its catalogue name. A service this installation does not sell answers 404, and the whole catalogue is `GET api/2.0/portal/payment/walletservices`. | [required] [example: `Storage`] [enum: `-18`, `-16`, `-15`, `-14`, `-13`, `-12`, `-11`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet service with its price, unit and the limits it grants | [**WalletServiceWrapper**](../api.md#model-walletservicewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not edit the portal settings | - | - |
| **404** | This installation does not sell a wallet service under that name | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WalletServiceWrapper**](../api.md#model-walletservicewrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
