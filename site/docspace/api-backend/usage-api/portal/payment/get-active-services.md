# getActiveServices

> ActiveServiceArrayWrapper getActiveServices()

`GET /api/2.0/portal/payment/activeservices`

Get the active wallet services

Returns the wallet services that run on the portal now. The list has the active add-ons of the plan and the services that an admin turned on by hand. It also has the Docs Connect trial, which the wallet does not pay for. Requires a DocSpace admin. Other callers get 403. The call also returns 403 if the installation has no billing service. The portal does not need a billing customer. The call is read-only. A subscription service can have its limit and its usage. For Docs Connect, these are the editor seats and the active editors. For disk storage, these are the bought units and the used units. An item without a limit is a service whose usage is not counted this way. The call returns 400 if the Docs Connect service does not know the active Docs Connect subscription. To read all services that the portal can buy, use `GET api/2.0/portal/payment/walletservices`. To turn a service on or off, use `POST api/2.0/portal/payment/servicestate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet services active on the portal, with their limits and usage where those are known | [**ActiveServiceArrayWrapper**](../../models/active-service-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The portal has an active Docs Connect subscription that the Docs Connect service does not know | - | - |
| **403** | The caller is not a DocSpace administrator, or the portal has no billing service configured | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ActiveServiceArrayWrapper**](../../models/active-service-array-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
