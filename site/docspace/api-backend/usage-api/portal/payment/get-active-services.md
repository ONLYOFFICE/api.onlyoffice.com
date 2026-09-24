# getActiveServices

> ActiveServiceArrayWrapper getActiveServices()

`GET /api/2.0/portal/payment/activeservices`

Get the active wallet services

Lists the wallet services the portal is running right now: the add-ons its plan pays for that are in the active state, plus the ones an administrator switched on by hand in the wallet service settings; the Docs Connect trial is listed as well, although it is not paid from the wallet. Only a DocSpace administrator may call it, no billing customer is needed for it, and the call is read-only. Every item names the service, its title and the unit it is measured in, and says whether it is a subscription; a subscribed service also carries the limit it grants and how much of it is used where that number is known - the editor seats and the editors currently active for Docs Connect, the purchased units and the units already consumed for disk storage. A service listed with no limit is one whose usage is not counted this way, not one without a limit. The catalogue of what could be switched on is `GET api/2.0/portal/payment/walletservices`, and switching one is `POST api/2.0/portal/payment/servicestate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The wallet services active on the portal, with their limits and usage where those are known | [**ActiveServiceArrayWrapper**](../../models/active-service-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
